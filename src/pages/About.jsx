import { Box, Heading, Text, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" w="100%" p={4} color="white">
        <Heading as="h1" size="lg">About Me</Heading>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text mt={4}>Passionate Developer Relations and Community Manager at Lovable.dev, dedicated to building and nurturing tech communities. Expert in bridging the gap between developers and stakeholders through effective communication and strategic initiatives.</Text>
      </Box>
    </Container>
  );
};

export default About;