import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  Textarea,
  Heading,
  Input,
<<<<<<< HEAD
} from "@chakra-ui/react";
=======
  Spacer,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
>>>>>>> 14c65b3608019aa981edd1c878bbf07d530efee1

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
<<<<<<< HEAD
        <Textarea placeholder="Feedback" />
      </Flex>
    </Center>
  );
};
=======
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
>>>>>>> 14c65b3608019aa981edd1c878bbf07d530efee1

export default ContactUs;
