import React from "react"
import { Flex, Center, Text, Heading } from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Center>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading fontSize={64}>404 Not Found!</Heading>
        <Text>Looks like you're heading to our unavailable service.</Text>
      </Flex>
    </Center>
  )
}

export default NotFound
