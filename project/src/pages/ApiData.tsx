import { useState } from 'react';
import { Container, Title, Text, Grid, Card, Loader, Center, TextInput, Badge, Alert, Button } from '@mantine/core';
import { IconSearch, IconAlertCircle } from '@tabler/icons-react';
// We importeren onze custom hook in plaats van useQuery en fetchNews
import { useNews } from '../data/hooks/useNews'; 

export default function ApiData() {
  const [searchTerm, setSearchTerm] = useState('');

  // Kijk hoe ongelooflijk schoon deze regel is geworden:
  const { data, isLoading, isError, error, refetch } = useNews();

  // ... de rest van je component (filteredNews, isLoading, etc.) blijft exact hetzelfde!

  const filteredNews = data?.filter((article) => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- LOADING STATE ---
  if (isLoading) {
    return (
      <Center h={400}>
        <div style={{ textAlign: 'center' }}>
          <Loader color="blue" size="xl" mb="md" />
          <Text c="dimmed">Nieuwsberichten laden...</Text>
        </div>
      </Center>
    );
  }

  // --- ERROR STATE ---
  if (isError) {
    return (
      <Container size="md" py="xl">
        <Alert 
          icon={<IconAlertCircle size="1rem" />} 
          title="Er ging iets mis!" 
          color="red" 
          radius="md"
        >
          <Text mb="md">{error.message}</Text>
          {/* Een knop om het opnieuw te proberen */}
          <Button onClick={() => refetch()} color="red" variant="light">
            Probeer opnieuw
          </Button>
        </Alert>
      </Container>
    );
  }

  // --- SUCCESS STATE ---
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xs" c="#1e293b">AI Nieuws & Actualiteiten</Title>
      <Text c="gray.7" mb="xl">Blijf op de hoogte van de laatste ontwikkelingen rondom Kunstmatige Intelligentie.</Text>

      <TextInput
        placeholder="Zoek op titel of categorie..."
        leftSection={<IconSearch size="1rem" />}
        size="md"
        mb="xl"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        aria-label="Zoek nieuwsberichten"
      />

      <Grid>
        {filteredNews?.length === 0 && (
          <Text c="dimmed">Geen resultaten gevonden voor "{searchTerm}".</Text>
        )}

        {filteredNews?.map((article) => (
          <Grid.Col key={article.id} span={{ base: 12, md: 6 }}>
            <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
              <Badge color="blue" variant="light" mb="sm">{article.category}</Badge>
              <Title order={3} size="h4" mb="xs">{article.title}</Title>
              <Text size="sm" c="dimmed" mb="md">{article.date}</Text>
              <Text size="sm" c="gray.7">{article.summary}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}