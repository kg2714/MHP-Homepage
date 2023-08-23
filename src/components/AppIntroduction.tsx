import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"

function AppIntroduction() {
  return (
    <Box bgColor={useColorModeValue("#efefee9f", "#a1c9ee99")}>
      <Box
        display={"flex"}
        height={512}
        justifyContent={"space-between"}
        mx={10}
      >
        <Box alignSelf={"center"}>
          <Heading>App name</Heading>
          <Text>
            A music player designed for personal use and sharing your own music.
          </Text>
        </Box>
        <Box alignSelf={"center"} my={10}>
          <Image src="https://picsum.photos/1000"></Image>
        </Box>
      </Box>
    </Box>
  )
}

export default AppIntroduction
