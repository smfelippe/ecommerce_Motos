import { Divider, Flex, Icon, Text, Box, Image, Button, Container, HStack, Input, Link } from "@chakra-ui/react";
import { useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { RiArrowDownSLine, RiCurrencyLine, RiMailSendLine, RiStarFill } from "react-icons/ri";
import { BsArrowUpCircle, BsInstagram, BsTwitter } from "react-icons/bs";

import { Header } from "../components/header";
import { Banner } from "../components/main/banner";
import { Pagination } from "../components/pagination";
import { NavLink } from "../components/header/navLink";
import { Carousel } from "../components/main/carousel";
import { BoxItems } from "../components/main/boxItems";
import { Products } from "../components/main/productsPage";
import { learnMoreCard, bestSellersCard, blogCard, clientCard } from "../utils/allLists"

export default function Home() {
  const [page, setPage] = useState(1);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (

    <Container maxW={[""]} centerContent>
      <Header />
      <NavLink color="blue.700" />
      <Divider w="100vw" borderColor="blue.700" />
      <Banner />

      <Flex as="section" id="carousel" w="100vw" bg="blue.700" justify="center" pt={["2", "2", "2", "4"]} pb={["59", "70", "70", "90"]}>
        <Icon as={RiCurrencyLine} fontSize={["15", "20", "20", "25"]} mr="2" mt="1" />
        <Text fontSize={["15", "20", "20", "25"]} fontWeight={"250"}>Produtos em destaque</Text>
      </Flex>

      <Carousel />

      <Flex as="section" id="boxitems" w="100vw" h={["55", "75", "100", "160"]} align="center" justify="center" bg="blue.700">
        <BoxItems />
      </Flex>

      <Products />
      <Pagination
        currentPage={page}
        onPageChange={setPage}
      />

      <Flex as="section" id="learnMoreCard" direction="column" pt={["30", "35", "50", "65"]} pb={["50", "50", "70", "90"]} align="center" justify="center">
        <Box display="flex" alignItems="center" pb={["2", "2", "2", "3"]}>
          <Icon as={RiStarFill} color="blue.700" fontSize={["15", "15", "16", "18"]}></Icon>
          <Text fontSize={["15", "15", "16", "18"]} fontWeight="300" color="blue.700" pl="2">Segurança e praticidade</Text>
        </Box>
        <Flex w="86%" justify="space-between">
          {learnMoreCard.map((details) =>
            <Flex key={details.title} w="24%" borderRadius={["10", "10", "10", "12"]} background="blue.700" border="2px solid" fontSize={["6", "8", "12", "14"]} cursor="pointer" _hover={{ bg: "orange.100", color: "blue.700", borderColor: "blue.700" }}>
              <Flex w="" h="" p={["1", "2", "2", "3"]} justify="center">
                <Box flex-direction="column" textAlign="center" position="absolute" maxW="170">
                  <Icon as={details.IconType} fontSize={["30", "35", "45", "55"]} marginTop=""></Icon>
                  <Text fontWeight="300" lineHeight="1">{details.title}</Text>
                </Box>
                <Box display="flex" justifyContent="center" pt={["50", "50", "70", "79"]}>
                  <Text w="85%" fontSize={["5", "8", "10"]} fontWeight="400" flex-wrap="wrap" lineHeight="3" textAlign="center">{details.description}</Text>
                </Box>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Flex as="section" w="100vw" id="bestSellersCard" direction="column" pt={["3", "3", "3", "5"]} pb={["3", "3", "4", "6"]} align="center" justify="center" background="blue.700">
        <Box display="flex" alignItems="center">
          <Icon as={GiTrophyCup} color="white" fontSize={["15", "16", "20", "25"]} pr="1" pb={["0", "0"]}></Icon>
          <Text fontSize={["15", "16", "18", "20"]} fontWeight="300" color="white">Os mais vendidos</Text>
        </Box>
        <HStack w={["78%", "84%"]} spacing={[2, 3, 4, 4]} py={["3", "4", "4", "5"]}>
          {bestSellersCard.map((sale) =>
            <Box key={sale.model} w="24%" display="flex" borderRadius="10" alignItems="center" flexDirection="column" background="white" color="blue.700" border="2px solid white" cursor="pointer" _hover={{ background: "orange.100" }}>
              <Text pb="1" fontSize={["10", "12", "14", "16"]} fontWeight="600" flex-wrap="wrap" textAlign="center" color="blue.700">{sale.model}</Text>
              <Image src={sale.imgProduct} alt="image_award" w="85%" />
              <Text fontSize={["8", "10", "12", "14"]} fontWeight="300" pt="2" flex-wrap="wrap" textAlign="center">{sale.address}</Text>
            </Box>
          )}
        </HStack>
        <Button width={["80px"]} h={["5", "5", "6", "7"]} bg="white" fontSize={["15", "15", "16", "18"]} color="blue.700" borderRadius="5" alignItems="center" justifyContent="center" leftIcon={<RiArrowDownSLine />}
          _focus={{ boxShadow: "none" }}>
          <Text fontSize={["10", "10", "12", "14"]} fontWeight="light" color="blue.700">Ver Mais</Text>
        </Button>
      </Flex>

      <Flex as="section" id="blogCard" w="86%" direction="column" pt={["35", "50", "70"]} align="center" justify="center" textAlign="center">
        <Text fontSize={["16", "16", "18", "20"]} fontWeight="md" color="blue.700">Acompanhe nosso Blog</Text>
        <Text fontSize={["10", "10", "12", "14"]} fontWeight="600" color="blue.700">Fique por dentro de todas as novidades, lançamentos de produtos e os acontecimentos mais importantes.</Text>
        <Flex w="100%" justify="space-between" py={["3"]} >
          {blogCard.map((blog) =>
            <Flex key={blog.id} w="23%" direction="column">
              <Image src={blog.imgProduct} borderRadius="20" cursor="pointer" alt="image_blog" />
              <Box display="flex" pt="4" flexDirection="column" color="blue.700">
                <Text fontSize={["10", "10", "12", "16"]} fontWeight="600" lineHeight={["3", "3", "4", "4"]} flex-wrap="wrap" color="blue.700">{blog.title}</Text>
                <Text fontSize={["8", "8", "10", "14"]} fontWeight="bold" pt="1" flex-wrap="wrap">{blog.address}</Text>
              </Box>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Flex as="section" id="clientCard" w="86%" direction="column" pt={["30", "65"]} align="center">
        <Text fontSize={["16", "16", "18", "20"]} fontWeight="md" color="blue.700">O que dizem sobre nós</Text>
        <HStack spacing={["2", "2", "2", "2"]} py={["3", "5"]} >
          {clientCard.map((client) =>
            <Flex key={client.name} direction="column" justifyContent="center">
              <Box display={["block"]} alignItems="center" color="blue.700" pt="0" pb="2">
                <Image src={client.imgClient} w="30%" border="1px solid" borderColor="blue.700" borderRadius={["5", "6"]} mb="1" alt="avatar" />
                <Box flex-direction="column" justifyContent="center" pl="">
                  <Text fontSize={["8", "12", "14", "16"]} fontWeight="bold" color="blue.700">{client.name}</Text>
                  <Text fontSize={["6", "10", "12", "14"]} fontWeight="md" lineHeight="1" pt="">{client.address}</Text>
                </Box>
              </Box>
              <Text fontSize={["6", "9", "10", "12"]} fontWeight="bold" flex-wrap="wrap" textOverflow="inherit" color="blue.700">{client.opinions}</Text>
            </Flex>
          )}
        </HStack>
      </Flex>

      <Flex as="section" id="newsLetter" w="100vw" bg="blue.700" justify="center" align="center" p="15" mb="55" mt={["35", "65"]}>
        <Flex w="86%" align="center" justify="space-between">
          <Box display={["none", "flex"]} alignItems="center">
            <Icon as={RiMailSendLine} fontSize={["40", "45", "55", "55"]} mr="2" />
          </Box>
          <Box pr="1">
            <Text fontSize={["20", "28", "35", "40"]} fontWeight="900" lineHeight="1" color="white">Newsletter</Text>
            <Text fontSize={["8", "10", "20", "20"]} fontWeight="900" lineHeight="bold" color="white">Cadastre-se aqui para receber</Text>
          </Box>
          <Box display={["block"]} flexDirection="row">
            <Input variant='outline' h={["5", "6", "7", "7"]} placeholder='Seu e-mail' color="white" pr="10" mr="" py="" fontSize={["8", "10", "12", "12"]} _placeholder={{ color: 'white' }} _focus={{ boxShadow: "none" }} />
            <Box display="flex" bg="white" h="6" mt="1" alignItems="center" justifyContent="center" borderRadius="4" fontSize={["8", "10", "12", "12"]} color="blue.700" _focus={{ boxShadow: "none" }}>Cadastrar</Box>
          </Box>
        </Flex>
      </Flex>

      <Flex as="footer" w="100vw" id="footer" direction="column" align="center" justify="center" bg="blue.700" pt="">
        <Box display="flex" w="86%" alignItems="center" justifyContent="space-between" p="4">
          <Box display="flex" flexDirection="column" >
            <Text fontSize={["25", "40", "50", "60"]} fontWeight="bold" color="white" lineHeight="1.2">&Motos</Text>
            <Box display={["none", "none"]}> <NavLink color="white" /> </Box>
          </Box>
          <Button size="xs" p={["3", "3", "4", "4"]} borderRadius={["5", "5", "5"]} color="blue.700" fontSize={["8", "8", "15", "16"]} _focus={{ boxShadow: "none" }}>Certificados e licenças</Button>
          <Link as={BsArrowUpCircle} fontSize={["30", "30", "35", "40"]} bg="transparent" ml={[]} onClick={goToTop} _hover={{ fill: "gray.400" }} />
        </Box>
        <Flex w="100vw" align="center" direction="column" bg="orange.200" mt={["1", "1", "1", "1"]} py="">
          <Flex w="90%" justify="space-between" pt="25">
            <Box display="flex" flexDirection="column" alignItems="center" maxW="30%">
              <Text fontSize={["10", "12", "15", "18"]} fontWeight="500" color="blue.700" lineHeight="1.2">Contato e redes sociais</Text>
              <HStack spacing={["2", "3", "4", "6"]} pt={["2"]}>
                <Link as={BsTwitter} fontSize={["20", "25", "30", "40"]} color="blue.700" />
                <Link as={BsInstagram} fontSize={["20", "25", "30", "40"]} color="blue.700" />
                <Link as={FaFacebookSquare} fontSize={["20", "25", "30", "40"]} color="blue.700" />
              </HStack>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" maxW="30%">
              <Text fontSize={["10", "12", "15", "18"]} fontWeight="500" color="blue.700" lineHeight="1.2">Formas de pagamento</Text>
              <Image src="../images/cardFlag.png" alt="img_card" pt={["2", "2", "2", "2"]} />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" maxW="30%">
              <Text fontSize={["10", "12", "15", "18"]} fontWeight="500" color="blue.700" lineHeight="1.2">Segurança do site</Text>
              <Image src="../images/securitySeal.png" alt="img_card" pt={["2", "2", "2", "2"]} />
            </Box>
          </Flex>
          <Text w="80%" fontSize={["10", "10", "12", "14"]} textAlign="center" pt={["5", "5"]} pb={["3", "3"]} color="gray.500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text fontSize={["8", "8", "12", "14"]} lineHeight={["4"]} color="gray.500">CNPJ 00.111.222/0001-00 Razão Social: Motos Company S/A</Text>
          <Text fontSize={["8", "8", "12", "14"]} lineHeight={["5"]} pb={["3", "2", "2"]} color="gray.500">Rua Central, 001 - CEP 00000-000 - Londrina - Pr</Text>
        </Flex>
        <Text py="3" fontSize={["8", "10", "12", "14"]}>Copyright 2022, all rights reserved by &Motos</Text>
      </Flex>

    </Container >
  )
}