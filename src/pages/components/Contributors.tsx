import React from "react"

import {
  Box,
  Text,
  Image,
  Center,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"

const ContributorLogo = (props: { imgSrc: string; name: string }) => {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <Image
        src={props.imgSrc}
        m={2}
        w={"96px"}
        h="96px"
        objectFit={"cover"}
        borderRadius={"999"}
        boxShadow={`0 0 1em ${useColorModeValue(
          "rgba(100, 100, 100, 0.85)",
          "rgba(255, 255, 255, 0.75)",
        )}`}
      />

      <Text>{props.name}</Text>
    </Flex>
  )
}

function Contributors() {
  return (
    <Box mx={10} my={8}>
      <Text>Built with ❤️ by</Text>
      <Center>
        <Stack
          direction={{
            md: "row",
            base: "column",
          }}
          spacing={{
            base: "20px",
            md: "50px",
          }}
        >
          <ContributorLogo
            imgSrc="https://picsum.photos/200/300"
            name="Algos Kril"
          />
          <ContributorLogo
            imgSrc="https://picsum.photos/200/300"
            name="Notch Apple"
          />
          <ContributorLogo imgSrc="https://picsum.photos/200/300" name="MHP" />
        </Stack>
      </Center>
    </Box>
  )
}

export default Contributors
