import { HStack, Link, Text } from "@chakra-ui/react";

interface NavLinkProps {
  color?: string;
}

export const navLink = [
  { title: "Home" },
  { title: "Sobre nós" },
  { title: "Como funciona" },
  { title: "Blog" },
  { title: "FAQS" },
  { title: "Fale conosco" },
]

export function NavLink({ color }: NavLinkProps) {
  return (
    <HStack w={["95%", "90%", "90%", "45%"]} justifyContent="space-between" mt={["0", "-1", "0", "-2"]} fontSize={["7", "12", "12", "15"]} color={color} >
      {navLink.map((navLink) =>
        <Link key={navLink.title} style={{ textDecoration: "none" }}>
          <Text _hover={{ fontWeight: "bold" }}>{navLink.title}</Text>
        </Link>
      )}
    </HStack>
  )
}