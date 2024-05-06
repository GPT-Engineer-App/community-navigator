import { Box, Flex, Heading, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" w="100%" p={4} color="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">Lovable.dev</Heading>
          <Flex as="nav">
            <Link href="#about" p={2}>About</Link>
            <Link href="#experience" p={2}>Experience</Link>
            <Link href="#projects" p={2}>Projects</Link>
            <Link href="#contact" p={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} p={5} align="stretch">
        <Box id="about" p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">About Me</Heading>
          <Text mt={4}>Passionate Developer Relations and Community Manager at Lovable.dev, dedicated to building and nurturing tech communities. Expert in bridging the gap between developers and stakeholders through effective communication and strategic initiatives.</Text>
        </Box>
        <Box id="experience" p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">Experience</Heading>
          <Text mt={4}>Over 10 years of experience in tech industry, with a focus on software development, community engagement, and public speaking. Previous roles include Senior Developer Advocate at TechCorp and Community Lead at OpenSourceHub.</Text>
        </Box>
        <Box id="projects" p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">Projects</Heading>
          <Text mt={4}>Developed numerous community-driven projects and tools that enhance developer productivity and collaboration. Notable projects include DevStream, an open-source streaming tool for developers, and CodeConnect, a platform for peer programming.</Text>
        </Box>
        <Box id="contact" p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="xl">Contact</Heading>
          <VStack spacing={3}>
            <Link href="https://linkedin.com/in/lovabledev" isExternal><FaLinkedin /> LinkedIn</Link>
            <Link href="https://github.com/lovabledev" isExternal><FaGithub /> GitHub</Link>
            <Link href="mailto:hello@lovable.dev"><FaEnvelope /> Email</Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;