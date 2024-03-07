import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Input } from "@/components/ui/input";
import { UserData } from "@/lib/interface";

interface PaginationFunctionProps {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

function getPartnershipInterest(contact: UserData): string {
  // Lista de IDs dos campos a serem verificados
  const fieldIds = [8, 9, 12, 16, 20, 24, 28, 36];

  // Encontra o primeiro campo que corresponde aos IDs especificados e possui um valor
  const foundField = contact.extra?.find(field => 
    fieldIds.includes(field.field_id) && [1, 2, 3].includes(Number(field.value))
  );

  // Verifica o valor e retorna o texto correspondente
  if (foundField) {
    switch (Number(foundField.value)) {
      case 1: return "Sim";
      case 2: return "Talvez";
      case 3: return "Não";
      default: return ""; // Caso não seja 1, 2 ou 3
    }
  }

  return ""; // Caso nenhum campo corresponda
}


export default function TableUser({
  entityUsers,
}: {
  entityUsers: UserData[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredEntityUsers = entityUsers.filter(
    (user) =>
      user.base?.first_name?.toLowerCase().includes(searchTerm) ||
      user.base?.last_name?.toLowerCase().includes(searchTerm)
  );

  // Calcula o índice dos itens para a página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEntityUsers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calcula o número total de páginas
  const totalPages = Math.ceil(filteredEntityUsers.length / itemsPerPage);

  // Função para mudar a página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="grid gap-4 mt-12">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Contactos</h2>
      </div>

      <Input
        type="text"
        id="myInput"
        onChange={handleSearchChange}
        placeholder="Pesquise por Entidade"
      ></Input>

      <div className="table-fixed-header">
        <Table className="rounded-md border">
          <TableHeader>
            <TableRow>
              <TableHead>Entidade</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Contactos</TableHead>
              <TableHead>Interesse em Contacto</TableHead>
              <TableHead>Probabilidade de Evento</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="scrollable-tbody-container overflow-auto max-h-96">
          <Table className="rounded-md border">
            <TableBody className="text-sm">
              {currentItems.map((contact) => (
                <TableRow key={contact.base.contact_id}>
                  <TableCell>{contact.extra?.[0]?.value}</TableCell>
                  <TableCell>{contact.base?.first_name}</TableCell>
                  <TableCell>
                    {contact.base.email}
                    <span className="block">{contact.base?.cellphone}</span>
                  </TableCell>
                  <TableCell>
                  {getPartnershipInterest(contact)}
                  </TableCell>
                  <TableCell>{contact.extra?.[3]?.value ? Math.max(0, Number(contact.extra[3].value)-1) : ''}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-3">
          <PaginationFunction
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

function PaginationFunction({ totalPages, currentPage, paginate }: PaginationFunctionProps) {
 
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Impede o comportamento padrão do link
                paginate(number);
              }}
              // Adiciona o atributo isActive condicionalmente
              {...(currentPage === number && { isActive: true })}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
