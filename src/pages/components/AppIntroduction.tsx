import { Box, Heading, Text, Image, Container } from "@chakra-ui/react"

function AppIntroduction() {
  return (
    <Box>
      <Box
        display={"flex"}
        height={512}
        justifyContent={"space-between"}
        alignItems={"center"}
        mx={10}
      >
        <Box alignSelf={"center"}>
          <Heading>App name</Heading>
          <Text>
            A music player designed for personal use and sharing your own music.
          </Text>
        </Box>
        <Box>
          <Container alignSelf={"center"} right={1}>
            <Image src="https://picsum.photos/1000"></Image>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default AppIntroduction
