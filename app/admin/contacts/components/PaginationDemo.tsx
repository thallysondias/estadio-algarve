
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
