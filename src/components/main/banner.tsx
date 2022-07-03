import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { RiPlayCircleLine } from "react-icons/ri";

export function Banner() {
  return (
    <Flex w={["70%", "70%"]} pt={["3", "3", "5", "8"]} justify="space-between">
      <Flex direction="column" pt={["3", "10", "6", "3"]}>
        <Text fontSize={["15", "20", "30", "50"]} fontWeight="bold" color="blue.700">Comprar nunca</Text>
        <Text fontSize={["15", "20", "30", "50"]} fontWeight="bold" color="blue.700" pb={["2", "2", "2", "5"]} lineHeight="1">foi tão fácil</Text>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" w={["95px", "100px", "120px", "150px"]} h={["6", "6", "8", "10"]} bg="white" borderRadius="6">
          <Text fontSize={["10", "12", "14", "18"]} fontWeight="bold" pl="2" color="blue.700">Saiba mais</Text>
          <Link>
            <Icon as={RiPlayCircleLine} pt="2" fontSize={["28", "30", "35", "45"]} color="blue.700" _hover={{ color: "orange.400" }} />
          </Link>
        </Box>
      </Flex>
      <Image src="/images/motoHeader.png" alt='moto' boxSize={["100", "160", "180", "240"]} mb="-1" />
    </Flex>
  );
}