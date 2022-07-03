import { Box, Button, Divider, Flex, HStack, Icon, Text, } from "@chakra-ui/react";
import { RiShoppingCart2Line, RiAccountCircleLine, RiUserAddLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex as="header" w={["95%", "90%"]} align="center" pt="3" justify="space-between">
      <Box mt="" pb="1">
        <Text lineHeight={["1"]} fontSize={["20", "40", "50"]} fontWeight="bold" color="blue.700">&Motos</Text>
        <Divider display={["none", "none", "none", "flex"]} w="15" border="2px solid" borderColor="blue.700" mt="1" />
        <Divider display={["none", "none", "none", "flex"]} w="15" border="2px solid" borderColor="blue.700" mt="1" />
      </Box>
      <HStack spacing={["1", "1", "2"]} pb="1">
        <Icon as={RiShoppingCart2Line} fontSize={["10", "18", "24"]} color="blue.700" cursor="pointer" />
        <Button type="submit" bg={["white"]} color="blue.700" p={["1", "3", "4"]} h="4" borderRadius="3px" alignItems="center" fontSize={["10", "15", "20"]} leftIcon={<RiUserAddLine />} _focus={{ border: "0" }}>
          <Text fontSize={["8", "10", "12"]} fontWeight="bold" color="blue.700">Criar conta</Text>
        </Button>
        <Button type="submit" bg={["white"]} color="blue.700" p={["1", "3", "4"]} h="4" borderRadius="3px" alignItems="center" fontSize={["10", "15", "20"]} leftIcon={<RiAccountCircleLine />} _focus={{ border: "0" }}>
          <Text textStyle="selected" fontSize={["8", "10", "12"]} fontWeight="lt" color="blue.700">Login</Text>
        </Button>
      </HStack>
    </Flex>
  )
}
