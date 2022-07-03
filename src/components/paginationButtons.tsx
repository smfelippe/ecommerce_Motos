import { Button, Icon, useBreakpointValue } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight, } from "react-icons/Bi";

import { scroller } from "react-scroll"

interface ButtonPreviusProps {
  number?: number
  onPageChange?: (page: number) => void;
}
interface ButtonReturnProps {
  number: number
  onPageChange?: (page: number) => void;
}
interface ButtonNextProps {
  number: number
  onPageChange?: (page: number) => void;
}
interface ButtonLastProps {
  number: number
  onPageChange?: (page: number) => void;
}
interface ButtonsPageProps {
  number: number
  isCurrent?: boolean
  onPageChange?: (page: number) => void;
}

function ScrollToProductsResults() {
  scroller.scrollTo("product_results", {
    smooth: true,
    duration: 500,
    delay: 100,
    offset: 20
  })
}

export function ButtonReturn({
  number,
  onPageChange,
}: ButtonReturnProps) {
  return (
    <Button
      size="xs"
      fontSize={["20", "22", "25", "28"]}
      w="4"
      color="blue.700"
      colorScheme="transparent"
      _focus={{
        boxShadow: "none"
      }}
      onClick={() => { onPageChange(number), ScrollToProductsResults() }}
    ><Icon as={BiChevronsLeft} />
    </Button>
  )
}

export function ButtonPrevius({
  number,
  onPageChange,
}: ButtonPreviusProps) {
  return (
    <Button
      size="xs"
      fontSize={["20", "22", "25", "28"]}
      w="4"
      color="blue.700"
      colorScheme="transparent"
      _focus={{
        boxShadow: "none"
      }}
      onClick={() => { onPageChange(number), ScrollToProductsResults() }}
    ><Icon as={BiChevronLeft} />
    </Button>
  )
}

export function ButtonNext({
  number,
  onPageChange,
}: ButtonNextProps) {
  return (
    <Button
      size="xs"
      fontSize={["20", "22", "25", "28"]}
      w="4"
      borderRadius="50% 50%"
      color="blue.700"
      colorScheme="transparent"
      _focus={{
        boxShadow: "none"
      }}
      onClick={() => { onPageChange(number), ScrollToProductsResults() }}
    ><Icon as={BiChevronRight} />
    </Button>
  )
}

export function ButtonLast({
  number,
  onPageChange,
}: ButtonLastProps) {
  return (
    <Button
      size="xs"
      fontSize={["20", "22", "25", "28"]}
      w="4"
      borderRadius="50% 50%"
      color="blue.700"
      colorScheme="transparent"
      _focus={{
        boxShadow: "none"
      }}
      onClick={() => { onPageChange(number), ScrollToProductsResults() }}
    >
      <Icon as={BiChevronsRight} />
    </Button>
  )
}

export function ButtonsPage({
  isCurrent = false,
  onPageChange,
  number,
}: ButtonsPageProps) {
  const isDisabled = useBreakpointValue({
    base: false,
    md: true
  })
  if (isCurrent) {
    return (
      <Button
        size="xs"
        w="5"
        bg="transparent"
        fontSize={["10", "12", "14", "16"]}
        color="blue.700"
        // border={["none"]}
        // "1px solid blue.700"
        borderRadius="50% 50%"
        boxShadow="none"
        disabled={isDisabled}
        _disabled={{
          cursor: "default",
          border: "1px solid",
        }}
        _hover={{
          boxShadow: "none",
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size={"xs"}
      fontSize={["10", "12", "14", "16"]}
      w="5"
      color="blue.700"
      colorScheme="transparent"
      _focus={{
        boxShadow: "none"
      }}
      onClick={() => { onPageChange(number), ScrollToProductsResults() }}
    >
      {number}
    </Button>
  )
}