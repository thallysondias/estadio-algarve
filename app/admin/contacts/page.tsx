"use client";
import React, { useState, useEffect } from "react";
import { getAllContacts } from "@/app/api/egoi/contacts/getAllContacts";
import { getAllOptions } from "@/app/api/egoi/fields/fieldOptions"; // Certifique-se de ter essa importação
import { UserData, OptionItem } from "@/lib/interface";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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

interface PaginationDemoProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}
type PageItemType = number | "...";

export default function ContactsPage() {
  const [dataUser, setDataUser] = useState({ total_items: 0, items: [] });
  const [options, setOptions] = useState<OptionItem[]>([]); // Estado para armazenar as opções
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const getTagName = (tag: number) => {
    switch (tag) {
      case 13:
        return "T-shirt";
      case 14:
        return "Cantil";
      case 15:
        return "Bloco de Notas";
      case 16:
        return "Caneta";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Inicia o carregamento
      try {
        const response = await getAllContacts();
        setDataUser(response);
        const optionsResponse = await getAllOptions(3);
        setOptions(optionsResponse.items);
      } catch (error) {
        console.error("Error fetching options:", error);
      } finally {
        setIsLoading(false); // Finaliza o carregamento
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toUpperCase());
    setCurrentPage(1); // Reseta para a primeira página nos resultados da pesquisa
  };

  const filteredContacts = dataUser.items.filter((contact: UserData) => {
    return (contact.base.email?.toUpperCase() || "").includes(searchTerm);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContacts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex max-w-5xl mx-auto">
      total: {dataUser.total_items}
      <Input
        type="text"
        id="myInput"
        onChange={handleSearchChange}
        placeholder="Pesquise por email"
      ></Input>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titulo</TableHead>
                  <TableHead>Entidade</TableHead>
                  <TableHead>Prémio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((contact: UserData) => {
                  const optionValue = contact.extra?.find(
                    (e) => e.field_id === 3
                  )?.value; // Ajuste o field_id conforme necessário
                  const option = options.find(
                    (o) => o.option_id === Number(optionValue)
                  );
                  return (
                    <TableRow key={contact.base.contact_id}>
                      <TableCell>{contact.base.email}</TableCell>
                      <TableCell>
                        {option ? option.pt : "Valor desconhecido"}
                      </TableCell>
                      <TableCell>
                        {contact.tags?.map((tag: number) => (
                          <span key={tag}>{getTagName(tag)}</span>
                        ))}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <PaginationDemo
              currentPage={currentPage}
              totalItems={dataUser.total_items}
              itemsPerPage={itemsPerPage}
              onPageChange={(newPage) => setCurrentPage(newPage)}
            />
          </div>
        </>
      )}
    </div>
  );
}

// Componente de Paginação
export function PaginationDemo({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationDemoProps) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNext = () => onPageChange(Math.min(pageCount, currentPage + 1));

  let pagesToShow: PageItemType[] = [1];
  if (currentPage > 2) {
    pagesToShow.push("...");
  }
  if (currentPage > 1 && currentPage < pageCount) {
    pagesToShow.push(currentPage - 1);
    pagesToShow.push(currentPage);
    if (currentPage + 1 < pageCount) pagesToShow.push(currentPage + 1);
  }
  if (currentPage < pageCount - 1 && pageCount - currentPage > 2) {
    pagesToShow.push("...");
  }
  if (pageCount !== 1) {
    pagesToShow.push(pageCount);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={handlePrevious} />
        </PaginationItem>
        {pagesToShow.map((page, index) => (
          <PaginationItem key={typeof page === "number" ? page : index}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                onClick={() => onPageChange(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
