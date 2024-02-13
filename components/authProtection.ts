import { useEffect } from "react";
import { useRouter } from "next/router";
import { cookies } from "next/headers";

const AuthProtection = () => {
  const router = useRouter();

  useEffect(() => {
    const cookieStore = cookies();
    const isAuthenticated = cookieStore.get("token");

    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

};

export default AuthProtection;
