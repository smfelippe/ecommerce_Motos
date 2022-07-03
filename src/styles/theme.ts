import { extendTheme, propNames } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    corteste: {
      teste: "#79709A",
    },
  },
  styles: {
    global: {
      body: {
        bg: "orange.100",
        color: "white",
        overflowX: "hidden",
      },
      // ".paginationBttns": {
      //   listStyle: "none",
      //   width: "100%",
      //   height: "50px",
      //   display: "flex",
      //   alignItems: "center",
      //   backgroundColor: "red",
      //   overflowY: "hidden",
      //   a: {
      //     padding: "",
      //     margin: "1",
      //     color: "blue.700",
      //     fontSize: "14",
      //     fontWeight: "bold",
      //     cursor: "pointer",
      //     _hover: {
      //       bg: "white",
      //     },
      //     _focus: {
      //       bg: "white",
      //     },
      //   },
      // },
    },
  },
  // fonts: {
  //   heading: "Poppins",
  //   body: "Poppins",
  // },
  // textStyles: {
  //   selected: {
  //     color: "white",
  //     fontSize: "10",
  //     fontWeight: "light",
  //   },
  // },
  // layerStyles: {
  //   selected: {
  //     display: "flex",
  //     alignItems: "center",
  //   },
  // },
})
