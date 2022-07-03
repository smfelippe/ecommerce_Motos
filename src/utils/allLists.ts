import { RiSecurePaymentLine, RiUserVoiceLine } from "react-icons/ri"
import { ImTicket } from "react-icons/im"
import { BiDevices } from "react-icons/bi"
import { LearnMoreCard } from "../models/LearnMoreCard"
import { BestSellersCard } from "../models/BestSellersCard"
import { BlogCard } from "../models/BlogCard"
import { ClientCard } from "../models/ClientCard"

export const learnMoreCard: LearnMoreCard[] = [
  {
    IconType: RiSecurePaymentLine,
    title: "CHECKOUT SEGURO",
    description:
      "Utilize os métodos de pagamento mais populares e seguros do mundo.",
  },
  {
    IconType: ImTicket,
    title: "VALORES COMPETITIVOS",
    description: "Oferecemos preços competitivos para todos os bilhetes.",
  },
  {
    IconType: BiDevices,
    title: "100% DIGITAL",
    description:
      "Você não precisa sair de casa para concorrer e resgatar seus prêmios! É tudo pelo nosso site.",
  },
  {
    IconType: RiUserVoiceLine,
    title: "SUPORTE DEDICADO",
    description:
      "Estão disponíveis para atender você e tirar todas as suas dúvidas.",
  },
]

export const bestSellersCard: BestSellersCard[] = [
  {
    model: "BMW M235i",
    imgProduct: "../images/cars_02.png",
    address: "São Paulo, SP - Brasil",
  },
  {
    model: "BMW M245i",
    imgProduct: "../images/cars_02.png",
    address: "São Paulo, SP - Brasil",
  },
  {
    model: "BMW M255i",
    imgProduct: "../images/cars_02.png",
    address: "São Paulo, SP - Brasil",
  },
  {
    model: "BMW M265i",
    imgProduct: "../images/cars_02.png",
    address: "São Paulo, SP - Brasil",
  },
]
export const blogCard: BlogCard[] = [
  {
    id: "1",
    imgProduct: "../images/newBlog.jpg",
    date: "24 MAI",
    title: "Lorem ipsum odorten amet consectetuer.",
    address:
      "Lorem ipsum odor amet, consectetuer and adipiscing elit. Ac purus in egestas.",
  },
  {
    id: "2",
    imgProduct: "../images/newBlog1.jpg",
    date: "24 MAI",
    title: "Lorem ipsum odorten amet consectetuer.",
    address:
      "Lorem ipsum odor amet, consectetuer and adipiscing elit. Ac purus in egestas.",
  },
  {
    id: "3",
    imgProduct: "../images/newBlog.jpg",
    date: "24 MAI",
    title: "Lorem ipsum odorten amet consectetuer.",
    address:
      "Lorem ipsum odor amet, consectetuer and adipiscing elit. Ac purus in egestas.",
  },
  {
    id: "4",
    imgProduct: "../images/newBlog1.jpg",
    date: "24 MAI",
    title: "Lorem ipsum odorten amet consectetuer.",
    address:
      "Lorem ipsum odor amet, consectetuer and adipiscing elit. Ac purus in egestas.",
  },
]

export const clientCard: ClientCard[] = [
  {
    imgClient: "../images/winner_1.jpg",
    name: "Aline A. Souza",
    address: "Cidade, Estado, País",
    opinions:
      "Lorem ipsum odorten amet consec tetuer act purus in egestas, lorem ipsum odorten amet consec tetuer act purus in egestas!",
  },
  {
    imgClient: "../images/winner_1.jpg",
    name: "Aline B. Souza",
    address: "Cidade, Estado, País",
    opinions:
      "Lorem ipsum odorten amet consec tetuer act purus in egestas, lorem ipsum odorten amet consec tetuer act purus in egestas!",
  },
  {
    imgClient: "../images/winner_1.jpg",
    name: "Aline C. Souza",
    address: "Cidade, Estado, País",
    opinions:
      "Lorem ipsum odorten amet consec tetuer act purus in egestas, lorem ipsum odorten amet consec tetuer act purus in egestas!",
  },
  {
    imgClient: "../images/winner_1.jpg",
    name: "Aline D. Souza",
    address: "Cidade, Estado, País",
    opinions:
      "Lorem ipsum odorten amet consec tetuer act purus in egestas, lorem ipsum odorten amet consec tetuer act purus in egestas!",
  },
]

export const products = [
  {
    id: 1,
    title: "Cruiser Chopper",
    image: "../images/moto_3.png",
    value: "250.000",
  },
  {
    id: 2,
    title: "Suzuki Hayabusa",
    image: "../images/moto_10.png",
    value: "250.000",
  },
  {
    id: 3,
    title: "Kawazaki Z750",
    image: "../images/moto_29.png",
    value: "250.000",
  },
  {
    id: 4,
    title: "Kawazaki ZX-14",
    image: "../images/moto_17.png",
    value: "250.000",
  },
  {
    id: 5,
    title: "Yamaha YZF-R",
    image: "../images/moto_9.png",
    value: "250.000",
  },
  {
    id: 6,
    title: "Ducati 959D Panigale",
    image: "../images/moto_5.png",
    value: "250.000",
  },
  {
    id: 7,
    title: "Kawazaki Ninja-300",
    image: "../images/moto_13.png",
    value: "250.000",
  },
  {
    id: 8,
    title: "Yamaha YZF-R6",
    image: "../images/moto_8.png",
    value: "250.000",
  },
  {
    id: 9,
    title: "Honda CBR600RR",
    image: "../images/moto_15.png",
    value: "250.000",
  },
  {
    id: 10,
    title: "Lifan Motor KPR-200",
    image: "../images/moto_1.png",
    value: "250.000",
  },
  {
    id: 11,
    title: "Bajaj Pulsar",
    image: "../images/moto_6.png",
    value: "250.000",
  },
  {
    id: 12,
    title: "Cruiser Victory Cycles",
    image: "../images/moto_2.png",
    value: "250.000",
  },
  {
    id: 13,
    title: "Yamaha YZF-R1",
    image: "../images/moto_18.png",
    value: "250.000",
  },
  {
    id: 14,
    title: "Suzuki M109R",
    image: "../images/moto_7.png",
    value: "250.000",
  },
  {
    id: 15,
    title: "Cruiser Chopper",
    image: "../images/moto_3.png",
    value: "250.000",
  },
  {
    id: 16,
    title: "Suzuki Hayabusa",
    image: "../images/moto_10.png",
    value: "250.000",
  },
  {
    id: 17,
    title: "Kawazaki Z750",
    image: "../images/moto_29.png",
    value: "250.000",
  },
  {
    id: 18,
    title: "Kawazaki ZX-14",
    image: "../images/moto_17.png",
    value: "250.000",
  },
  {
    id: 19,
    title: "Yamaha YZF-R",
    image: "../images/moto_9.png",
    value: "250.000",
  },
  {
    id: 20,
    title: "Ducati 959D Panigale",
    image: "../images/moto_5.png",
    value: "250.000",
  },
  {
    id: 21,
    title: "Kawazaki Ninja-300",
    image: "../images/moto_13.png",
    value: "250.000",
  },
  {
    id: 22,
    title: "Yamaha YZF-R6",
    image: "../images/moto_8.png",
    value: "250.000",
  },
  {
    id: 23,
    title: "Honda CBR600RR",
    image: "../images/moto_15.png",
    value: "250.000",
  },
  {
    id: 24,
    title: "Lifan Motor KPR-200",
    image: "../images/moto_1.png",
    value: "250.000",
  },
  {
    id: 25,
    title: "Bajaj Pulsar",
    image: "../images/moto_6.png",
    value: "250.000",
  },
  {
    id: 26,
    title: "Cruiser Victory Cycles",
    image: "../images/moto_2.png",
    value: "250.000",
  },
  {
    id: 27,
    title: "Yamaha YZF-R1",
    image: "../images/moto_18.png",
    value: "250.000",
  },
  {
    id: 28,
    title: "Suzuki M109R",
    image: "../images/moto_7.png",
    value: "250.000",
  },
  {
    id: 29,
    title: "Cruiser Chopper",
    image: "../images/moto_3.png",
    value: "250.000",
  },
  {
    id: 30,
    title: "Suzuki Hayabusa",
    image: "../images/moto_10.png",
    value: "250.000",
  },
  {
    id: 31,
    title: "Kawazaki Z750",
    image: "../images/moto_29.png",
    value: "250.000",
  },
  {
    id: 32,
    title: "Kawazaki ZX-14",
    image: "../images/moto_17.png",
    value: "250.000",
  },
  {
    id: 33,
    title: "Yamaha YZF-R",
    image: "../images/moto_9.png",
    value: "250.000",
  },
  {
    id: 34,
    title: "Ducati 959D Panigale",
    image: "../images/moto_5.png",
    value: "250.000",
  },
  {
    id: 35,
    title: "Kawazaki Ninja-300",
    image: "../images/moto_13.png",
    value: "250.000",
  },
  {
    id: 36,
    title: "Yamaha YZF-R6",
    image: "../images/moto_8.png",
    value: "250.000",
  },
  {
    id: 37,
    title: "Honda CBR600RR",
    image: "../images/moto_15.png",
    value: "250.000",
  },
  {
    id: 38,
    title: "Lifan Motor KPR-200",
    image: "../images/moto_1.png",
    value: "250.000",
  },
  {
    id: 39,
    title: "Bajaj Pulsar",
    image: "../images/moto_6.png",
    value: "250.000",
  },
  {
    id: 40,
    title: "Cruiser Victory Cycles",
    image: "../images/moto_2.png",
    value: "250.000",
  },
  {
    id: 41,
    title: "Yamaha YZF-R1",
    image: "../images/moto_18.png",
    value: "250.000",
  },
  {
    id: 42,
    title: "Suzuki M109R",
    image: "../images/moto_7.png",
    value: "250.000",
  },
  {
    id: 43,
    title: "Cruiser Chopper",
    image: "../images/moto_3.png",
    value: "250.000",
  },
  {
    id: 44,
    title: "Suzuki Hayabusa",
    image: "../images/moto_10.png",
    value: "250.000",
  },
  {
    id: 45,
    title: "Kawazaki Z750",
    image: "../images/moto_29.png",
    value: "250.000",
  },
  {
    id: 46,
    title: "Kawazaki ZX-14",
    image: "../images/moto_17.png",
    value: "250.000",
  },
  {
    id: 47,
    title: "Yamaha YZF-R",
    image: "../images/moto_9.png",
    value: "250.000",
  },
  {
    id: 48,
    title: "Ducati 959D Panigale",
    image: "../images/moto_5.png",
    value: "250.000",
  },
  {
    id: 49,
    title: "Cruiser Chopper",
    image: "../images/moto_3.png",
    value: "250.000",
  },
  {
    id: 50,
    title: "Suzuki Hayabusa",
    image: "../images/moto_10.png",
    value: "250.000",
  },
  {
    id: 51,
    title: "Kawazaki Z750",
    image: "../images/moto_29.png",
    value: "250.000",
  },
  {
    id: 52,
    title: "Kawazaki ZX-14",
    image: "../images/moto_17.png",
    value: "250.000",
  },
  {
    id: 53,
    title: "Yamaha YZF-R",
    image: "../images/moto_9.png",
    value: "250.000",
  },
  {
    id: 54,
    title: "Ducati 959D Panigale",
    image: "../images/moto_5.png",
    value: "250.000",
  },
  {
    id: 55,
    title: "Kawazaki Ninja-300",
    image: "../images/moto_13.png",
    value: "250.000",
  },
  {
    id: 56,
    title: "Yamaha YZF-R6",
    image: "../images/moto_8.png",
    value: "250.000",
  },
  {
    id: 57,
    title: "Honda CBR600RR",
    image: "../images/moto_15.png",
    value: "250.000",
  },
  {
    id: 58,
    title: "Lifan Motor KPR-200",
    image: "../images/moto_1.png",
    value: "250.000",
  },
  {
    id: 59,
    title: "Bajaj Pulsar",
    image: "../images/moto_6.png",
    value: "250.000",
  },
  {
    id: 60,
    title: "Cruiser Victory Cycles",
    image: "../images/moto_2.png",
    value: "250.000",
  },
  {
    id: 61,
    title: "Yamaha YZF-R1",
    image: "../images/moto_18.png",
    value: "250.000",
  },
  {
    id: 62,
    title: "Suzuki M109R",
    image: "../images/moto_7.png",
    value: "250.000",
  },
  {
    id: 63,
    title: "Cruiser Chopper",
    image: "../images/moto_3.png",
    value: "250.000",
  },
  {
    id: 64,
    title: "Suzuki Hayabusa",
    image: "../images/moto_10.png",
    value: "250.000",
  },
  {
    id: 65,
    title: "Kawazaki Z750",
    image: "../images/moto_29.png",
    value: "250.000",
  },
  {
    id: 66,
    title: "Kawazaki ZX-14",
    image: "../images/moto_17.png",
    value: "250.000",
  },
  {
    id: 67,
    title: "Yamaha YZF-R",
    image: "../images/moto_9.png",
    value: "250.000",
  },
  {
    id: 68,
    title: "Ducati 959D Panigale",
    image: "../images/moto_5.png",
    value: "250.000",
  },
  {
    id: 69,
    title: "Kawazaki Ninja-300",
    image: "../images/moto_13.png",
    value: "250.000",
  },
  {
    id: 70,
    title: "Yamaha YZF-R6",
    image: "../images/moto_8.png",
    value: "250.000",
  },
  {
    id: 71,
    title: "Honda CBR600RR",
    image: "../images/moto_15.png",
    value: "250.000",
  },
  {
    id: 72,
    title: "Lifan Motor KPR-200",
    image: "../images/moto_1.png",
    value: "250.000",
  },
]
