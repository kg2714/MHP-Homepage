import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Textarea,
  Heading,
  Input,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Center my={4}>
      <Heading>Any concerns?</Heading>
      <Flex direction={"column"}>
        <Text>Contact us</Text>
        <Input
          placeholder="Email"
          variant={"flushed"}
          focusBorderColor="#3e3e3e"
          px={2}
        />
        <Textarea placeholder="Feedback" />
      </Flex>
    </Center>
  );
};

export default ContactUs;
