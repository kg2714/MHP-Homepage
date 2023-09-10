import React from "react"
import {
  Box,
  Text,
  Flex,
  Center,
  Textarea,
  Heading,
  Input,
  Spacer,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"

const ContactUs = () => {
  return (
    <Stack
      mx={10}
      my={5}
      direction={{
        base: "column",
        md: "row",
      }}
    >
      <Center>
        <Heading>Any concerns?</Heading>
      </Center>
      <Spacer />
      <Stack
        textAlign={"center"}
        justifyContent={"center"}
        direction={"column"}
        mx={{
          md: 10,
          base: 0,
        }}
        spacing={5}
      >
        <Text>Contact us</Text>
        <Input
          placeholder="Email"
          variant={"flushed"}
          focusBorderColor="#8ef88a"
          px={2}
          width={{
            md: "580px",
            base: "full",
          }}
        />
        <Textarea
          placeholder="Feedback"
          height={{
            md: "280px",
            base: "180px",
          }}
          resize={"none"}
          outline={"none"}
          focusBorderColor="#9e7faa"
        />
      </Stack>
    </Stack>
  )
}

export default ContactUs
