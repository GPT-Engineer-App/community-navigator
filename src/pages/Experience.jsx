import { Box, Heading, Text, Container } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" w="100%" p={4} color="white">
        <Heading as="h1" size="lg">Experience</Heading>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text mt={4}>Over 10 years of experience in tech industry, with a focus on software development, community engagement, and public speaking. Previous roles include Senior Developer Advocate at TechCorp and Community Lead at OpenSourceHub.</Text>
      </Box>
    </Container>
  );
};

export default Experience;