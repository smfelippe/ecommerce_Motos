import React from "react";
import Slider from "react-slick";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine, RiMoreFill } from "react-icons/ri";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../../utils/allLists";

function ArrowPrev(props) {
  const { className, style, onClick } = props;
  return (
    <Icon as={RiArrowLeftSLine} fontSize={["30"]} color="blue.700" ml={["-2", "-2", "-3", "-4"]} _hover={{ color: 'orange.300' }}
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", cursor: 'default' }}>
    </Icon>
  );
}

function ArrowNext(props) {
  const { className, style, onClick } = props;
  return (
    <Icon as={RiArrowRightSLine} fontSize={["30"]} color="blue.700" mr={["0", "0", "-1", "-2"]} _hover={{ color: 'orange.300' }}
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", cursor: 'default' }}>
    </Icon>
  );
}

export function Carousel() {
  const settings = {
    accessibility: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    pauseOnHover: true,
    touchMove: false,
    dots: false,
    arrows: true,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ],

    appendDots: () => (
      <Flex justify="center" align="center" bottom="-12">
        <Icon as={RiMoreFill} style={{ color: "gray", fontSize: "50" }}>
        </Icon>
      </Flex >
    )
  };

  return (
    <Flex display="block" w="90%" mt={["-50", "-55", "-55", "-70"]} pl={["2", "3", "3", "4"]} pb={["30", "65", "65", "85"]}>
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <Flex key={product.image} maxW="95%" pl={["2", "2", "2", "2"]} pb="2" direction="column" align="center" bg="white" borderRadius={["3", "3", "3", "8"]}>
              <Image src={product.image} alt="product_img" w="90%" transitionDuration="0.3s" _hover={{ transform: "scale(1.1)", transition: "0.3s", marginLeft: "2" }} />
              <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Text fontSize={["15", "16"]} color="blue.700">$ </Text>
                <Text fontSize={["15", "16"]} color="blue.700" pl="1">{product.value}</Text>
              </Box>
              <Button w="95%" h={["4", "6"]} m={["0", "0"]} alignItems="center" justifyContent="center" fontSize={["10", "12"]} fontWeight="300" color="white" bg="blue.700" borderRadius={["3", "3"]} mt="2" colorScheme="light"
                _hover={{ bgColor: "white", color: "blue.700", border: "1px solid", borderColor: "blue.700", fontWeight: "bold" }}
                _focus={{ border: "1px solid", borderColor: "blue.700" }}>
                Confira esse destaque
              </Button>
            </Flex>
          );
        })}
      </Slider>
    </Flex>
  )
}