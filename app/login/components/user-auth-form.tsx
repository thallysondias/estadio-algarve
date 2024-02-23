"use client"

import * as React from "react"

import { ReloadIcon} from '@radix-ui/react-icons'

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/admin");
      } else {
        /*Investigate why the login hasn't completed */
        setIsLoading(false)
        console.log(result);
      }
    } catch (err: any) {
      setIsLoading(false)
      console.error("error", err.errors[0].longMessage);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(e) => setEmailAddress(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
          <Input
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button  type="submit" disabled={isLoading}>
            {isLoading && (
            <ReloadIcon className="animate-spin"/>
            )}
           Entrar
          </Button>
        </div>
      </form>
    </div>
  )
}