import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" w="100%" p={4} color="white">
        <Heading as="h1" size="lg">Projects</Heading>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text mt={4}>Developed numerous community-driven projects and tools that enhance developer productivity and collaboration. Notable projects include DevStream, an open-source streaming tool for developers, and CodeConnect, a platform for peer programming.</Text>
      </Box>
    </Container>
  );
};

export default Projects;