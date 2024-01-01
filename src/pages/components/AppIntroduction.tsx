import { Box, Heading, Text, Image, Container } from "@chakra-ui/react"
import { motion } from 'framer-motion'

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
          <motion.div initial={{
            y: 100,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            delay: 0.3,
            type: "just",
            duration: 0.8,
            stiffness: 100

          }}>
            <Heading>App name</Heading>

          </motion.div>
          <motion.div initial={{
            y: 100,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            delay: 1, type: "spring",

            duration: 2

          }}>
            <Text>
              A music player designed for personal use and sharing your own music.
            </Text></motion.div>
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
