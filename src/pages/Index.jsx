import React from "react";
import { Box, Container, Heading, Text, VStack, Button, useColorMode, Image } from "@chakra-ui/react";
import { FaEnvelope, FaLightbulb, FaRocket, FaBrain } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} as="article">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={2}>
            Master Long Chain Prompts
          </Heading>
          <Text fontSize="xl" colorScheme="gray">
            A primer on enhancing your AI learning journey with OpenAI's ChatGPT.
          </Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGxlYXJuaW5nfGVufDB8fHx8MTcwOTMzOTQyM3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />

        <Box as="section" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            <FaLightbulb /> The Essence of Long Chain Prompts
          </Heading>
          <Text fontSize="md">Dive deep into the world of Language Learning Models (LLMs) and how long chain prompts revolutionize the way chatbots interact and maintain context.</Text>
        </Box>

        <Box as="section" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            <FaBrain /> Learning with Context
          </Heading>
          <Text fontSize="md">Understand the intricate process of how AI models like ChatGPT keep track of conversation history to produce relevant and insightful responses.</Text>
        </Box>

        <Box as="section" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            <FaRocket /> Practical Applications
          </Heading>
          <Text fontSize="md">Explore the practical applications of long chain prompts in various domains, such as AI-driven customer service, social media management, and content marketing.</Text>
        </Box>

        <Box textAlign="center" py={6}>
          <Button rightIcon={<FaEnvelope />} colorScheme="blue" onClick={() => (window.location = "mailto:info@example.com")}>
            Get in Touch
          </Button>
        </Box>

        <Box textAlign="center" py={2}>
          <Button size="sm" onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
