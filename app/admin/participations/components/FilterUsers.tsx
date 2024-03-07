import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


interface UserInformation {
  name: string | undefined;
  userEmail: string;
  userCellphone: string;
  entity: string | number | string[] | number[] | undefined;
  entityName: string;
  response: string;
}
interface DialogContent {
  title: string;
  description: string;
  totalParticipation: number;
  users: UserInformation[]; // Use the interface here
}

interface FilterUsersProps {
  dialogContent: DialogContent;
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
}

export default function FilterUsers({
  dialogContent,
  isDialogOpen,
  setIsDialogOpen,
}: FilterUsersProps) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogContent.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {dialogContent.description}
          <p>Total Participation: {dialogContent.totalParticipation}</p>
        </DialogDescription>

        {/* Assuming you have Table components defined somewhere */}
        <div className="table-fixed-header">
          <Table className="rounded-md border">
            <TableHeader>
              <TableRow>
                <TableHead>Participante</TableHead>
                <TableHead>Contacto</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
          <div className="scrollable-tbody-container overflow-auto max-h-96">
            <Table className="rounded-md border">
              <TableBody className="text-sm">
                {dialogContent.users?.map((user, index) => (
                  <TableRow key={`dialog-${index}`}>
                    <TableCell>
                      <span className="block font-bold text-xs ">
                        {user.entityName}
                      </span>
                      {user.name}
                    </TableCell>
                    <TableCell>
                      {user.userEmail}
                      <span className="block">{user.userCellphone}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
