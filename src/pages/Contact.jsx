import { Box, Heading, VStack, Link, Container } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" w="100%" p={4} color="white">
        <Heading as="h1" size="lg">Contact</Heading>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <VStack spacing={3}>
          <Link href="https://linkedin.com/in/lovabledev" isExternal><FaLinkedin /> LinkedIn</Link>
          <Link href="https://github.com/lovabledev" isExternal><FaGithub /> GitHub</Link>
          <Link href="mailto:hello@lovable.dev"><FaEnvelope /> Email</Link>
        </VStack>
      </Box>
    </Container>
  );
};

export default Contact;