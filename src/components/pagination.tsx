import { Flex, HStack } from "@chakra-ui/react";
import { products } from "../utils/allLists";
import { ButtonPrevius, ButtonNext, ButtonsPage, ButtonReturn, ButtonLast } from "./paginationButtons"
import { Products, ProductsResults } from "./main/productsPage";

interface PaginationProps {
  totalCount?: number
  itemsPerPage?: number
  currentPage: number
  sidePageLeft?: number
  sidePageRight?: number

  onChanged?: (fonte: number) => void;
  onPageChange: (page: number) => void;
}

function generatePages(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCount,
  itemsPerPage = 12,
  currentPage = 1,
  sidePageLeft = 2,
  sidePageRight = 2,

  onChanged,
  onPageChange }: PaginationProps) {
  totalCount = (products.length)
  const lastPage = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage * itemsPerPage - itemsPerPage);
  const endIndex = (startIndex + itemsPerPage);
  const pageProds = products.slice(startIndex, endIndex)

  currentPage === 1
    ? (sidePageLeft = 3) && (sidePageRight = 4)
    : []
  currentPage === 2
    ? (sidePageLeft = 2) && (sidePageRight = 3)
    : []
  currentPage === lastPage - 1
    ? (sidePageLeft = 3)
    : []
  currentPage === lastPage
    ? (sidePageLeft = 4)
    : []

  const previusPages = currentPage > 1
    ? generatePages(currentPage - 1 - sidePageLeft, currentPage - 1)
    : []
  const nextPages = currentPage < lastPage
    ? generatePages(currentPage, Math.min(currentPage + sidePageRight, lastPage))
    : []

  return (
    <>
      <ProductsResults amount={totalCount} />
      <Products onPageProds={pageProds} />

      <Flex>
        <HStack spacing={["0"]} justifyContent="center" align="center">

          <ButtonReturn onPageChange={onPageChange} number={1} />
          {currentPage > 1 &&
            <ButtonPrevius onPageChange={onPageChange} number={currentPage - 1} />}
          {previusPages.length > 0 && previusPages.map(page => {
            return <ButtonsPage onPageChange={onPageChange} key={page} number={page} />;
          })}
          <ButtonsPage onPageChange={onPageChange} number={currentPage} isCurrent />
          {nextPages.length > 0 && nextPages.map(page => {
            return <ButtonsPage onPageChange={onPageChange} key={page} number={page} />;
          })}
          {currentPage < lastPage &&
            <ButtonNext onPageChange={onPageChange} number={currentPage + 1} />}
          <ButtonLast onPageChange={onPageChange} number={lastPage} />

        </HStack>
      </Flex>
    </>
  );
}