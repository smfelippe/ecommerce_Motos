import { Box, Button, Flex, Icon, IconButton, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { IoIosAdd, IoIosRemove, } from "react-icons/Io";
import React from "react";

interface ProductsProps {
  onPageProds?: {
    id: number,
    title: string,
    image: string,
    value: string
  }[]
}

interface ProductsAmountProps {
  amount?: number,
}

export function ProductsResults({ amount }: ProductsAmountProps) {
  return (
    <Flex id="product_results" w="85%" justify="left" color="blue.700" pt={["4", "8", "10", "12"]} mb="-2">
      <Text fontSize={["10", "12", "15", "18"]}>Encontrados {amount} produtos</Text>
    </Flex>
  )
}

export function Products({ onPageProds = [] }: ProductsProps) {
  return (
    <>
      <SimpleGrid id="products" w={["90%"]} alignItems="center" columns={[2, 2, 2, 4]} pb={["4", "4", "6", "8"]} pl={["1", "5", "6", "6"]}>
        {onPageProds.map(product => {
          return (
            <Flex as="section" id="portfolio" key={product.id} w="95%" pb="3" mt="5" justify="center" direction="column" align="center" bg="white" borderRadius="10">
              <Text fontSize={["10", "12", "12", "14"]} fontWeight="bold" color="blue.700" p="2">{product.title}</Text>
              <Image src={product.image} alt="product" w="90%" transitionDuration="0.3s" ml={["-2", "-2", "-2", "-2"]} _hover={{ transform: "scale(1.1)", transition: "0.3s", marginLeft: "1" }} />
              <Box w="90%" display="flex" alignItems="center" justifyContent="space-between" pb="1">
                <Text fontSize={["8", "12", "15", "15"]} fontWeight="bold" color="blue.700">$ {product.value}</Text>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <IconButton aria-label="reduce" w="4" fontSize={["10", "10", "10", "12"]} colorScheme="light" minW={["4", "4", "4", "4"]} icon={<Icon as={IoIosRemove} m={["0", "4", "4", "4"]} />}
                    borderRadius="3" h="4" mr="1" bg="blue.700"
                    _hover={{ bgColor: "white", color: "blue.700", border: "1px solid", borderColor: "blue.700", fontWeight: "bold" }}
                    _focus={{ boxShadow: "none", color: "blue.700" }}>
                  </IconButton>
                  <Input type="text" name="productAmount" w="10" h={["4", "4", "4", "4"]} textAlign="center" fontSize={["8", "8", "8", "10"]} borderColor="blue.700" borderRadius="3" _focus={{ border: "blue.500" }} _hover={{ border: "blue.700" }} placeholder="1" _placeholder={{ color: "blue.700" }} />
                  <IconButton aria-label="reduce" fontSize={["10", "10", "10", "12"]} colorScheme="light" minW={["4", "4", "4"]}
                    icon={<Icon as={IoIosAdd} />}
                    borderRadius="4" h="4" ml="1" bg="blue.700"
                    _hover={{ bgColor: "white", color: "blue.700", border: "1px solid", borderColor: "blue.700", fontWeight: "bold" }}
                    _focus={{ boxShadow: "none", color: "blue.700" }}>
                  </IconButton>
                </Box>
              </Box>
              <Button w="90%" h={["4", "6"]} m={["0", "0"]} alignItems="center" justifyContent="center" fontSize={["8", "12"]} fontWeight="300" color="white" bg="blue.700" borderRadius={["3", "3"]} mt={["0", "0"]} colorScheme="light"
                _hover={{ bgColor: "white", color: "blue.700", border: "1px solid", borderColor: "blue.700", fontWeight: "bold" }}
                _focus={{ border: "1px solid", borderColor: "blue.700" }}>
                Comprar
              </Button>
            </Flex>
          );
        })}
      </SimpleGrid>
      {/* <Button width="130px" h="8" bg="blue.700" borderRadius="5" alignItems="center" justifyContent="center" leftIcon={<RiArrowDownSLine fontSize="25" />}
      _hover={{ bgColor: "orange.100", border: "2px solid", color: "blue.700" }}
      _focus={{ boxShadow: "none" }}>
      <Text fontSize="14" fontWeight="light">Ver Mais</Text>
    </Button> */}
    </>
  )
}
