import React from "react";
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
  VStack,
} from "@chakra-ui/react"

const ContactUs = () => {
  return (
    <Stack
      mx={10}
      my={8}
      direction={{
        base: "column",
        md: "row",
      }}
    >
      <Center>
        <VStack align={"start"}>
          <Heading>Any concerns?</Heading>
          <Text maxWidth={{
            md: "580px",
            base: "full"
          }}>If you have any inquiries or suggestions regarding our products, please feel free to ask and provide detailed information to assist us in enhancing your experience.</Text>
        </VStack>
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
        <Textarea placeholder="Feedback" 
          height={"250px"}
          resize={"none"}
        />
      </Stack>
      
    </Stack>
  )
}

export default ContactUs;
