import { Box, Icon, Text, SimpleGrid } from "@chakra-ui/react";
import { MotoIcon } from "../svg-icons/motoBox";
import { HugIcon } from "../svg-icons/hugBox";
import { GloIcon } from "../svg-icons/gloBox";

export const boxItems = [
  { title: "Motos", IconType: MotoIcon },
  { title: "Capacetes", IconType: HugIcon },
  { title: "Acessórios", IconType: GloIcon }
]

export function BoxItems() {
  return (
    <SimpleGrid w="85%" columns={3} spacing={["2", "3", "4", "5"]} p="2" alignItems="center">
      {boxItems.map((items) =>
        <Box key={items.title} display="flex" alignItems="center" justifyContent="space-between" borderRadius="5" bg="white" color="blue.700" pl="2" pr="1" _hover={{ bg: "blue.700", color: "white", borderColor: "blue.700", border: "2px solid white" }}>
          <Text fontSize={["10", "15", "20", "30"]} fontWeight="bold">{items.title}</Text>
          <Icon as={items.IconType} fontSize={["40", "50", "70", "120"]}></Icon>
        </Box>
      )}
    </SimpleGrid>
  )
}