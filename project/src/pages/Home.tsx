import { Container, Title, Text, Button, Group, Stack, Paper, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container size="lg" py="xl">
      <Stack align="center" gap="lg" mt="xl">
        
        <Title order={1} ta="center" size="3.5rem" c="#1e293b" lh={1.1}>
          De Impact van <span style={{ color: '#0ea5e9' }}>Kunstmatige Intelligentie</span>
        </Title>

        {/* c="gray.7" in plaats van "dimmed" voor beter WCAG contrast */}
        <Text size="xl" ta="center" c="gray.7" maw={700}>
          AI verandert onze wereld snel. Het biedt kansen voor geneeskunde en onderwijs, 
          maar roept ook vragen op over ethiek, banen en deepfakes. 
          Wij maken de positieve en negatieve kanten inzichtelijk.
        </Text>

        <Group mt="xl" gap="md">
          <Button component={Link} to="/quiz" size="xl" radius="md" color="blue">
            Test je kennis: AI of Mens?
          </Button>
          <Button component={Link} to="/kennisbank" size="xl" radius="md" variant="light">
            Lees de Kennisbank
          </Button>
        </Group>

        {/* Impact Data in mooie kaartjes */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt="3rem" w="100%" maw={800}>
          <Paper shadow="sm" radius="md" p="xl" withBorder bg="white">
            <Title order={2} c="#0ea5e9" size="2.5rem">75%</Title>
            <Text size="md" c="gray.7" fw={500}>van de Nederlanders maakt wekelijks gebruik van AI</Text>
          </Paper>
          <Paper shadow="sm" radius="md" p="xl" withBorder bg="white">
            <Title order={2} c="#0ea5e9" size="2.5rem">2026</Title>
            <Text size="md" c="gray.7" fw={500}>Nieuwe Europese AI-wetgeving van kracht</Text>
          </Paper>
        </SimpleGrid>

      </Stack>
    </Container>
  );
}