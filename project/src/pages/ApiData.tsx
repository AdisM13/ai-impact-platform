import { useState } from 'react';
import { Container, Title, Text, Grid, Card, Loader, Center, TextInput, Badge, Alert, Button, Modal, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconAlertCircle, IconCalendar } from '@tabler/icons-react';
import { useNews } from '../data/hooks/useNews';

// We breiden het type uit met een content-veld
type NewsArticle = {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
};

export default function ApiData() {
  const [searchTerm, setSearchTerm] = useState('');
  // State voor de modal en het geselecteerde artikel
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const { data, isLoading, isError, error, refetch } = useNews();

  const filteredNews = (data as NewsArticle[] | undefined)?.filter((article) => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (article: NewsArticle) => {
    setSelectedArticle(article);
    open();
  };

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

  if (isError) {
    return (
      <Container size="md" py="xl">
        <Alert icon={<IconAlertCircle size="1rem" />} title="Er ging iets mis!" color="red" radius="md">
          <Text mb="md">{error.message}</Text>
          <Button onClick={() => refetch()} color="red" variant="light">Probeer opnieuw</Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xs" c="#1e293b">AI Nieuws & Actualiteiten</Title>
      <Text c="gray.7" mb="xl">Blijf op de hoogte van de laatste ontwikkelingen rondom Kunstmatige Intelligentie.</Text>

      <TextInput
        placeholder="Zoek op titel of categorie..."
        leftSection={<IconSearch size="1rem" />}
        size="md" mb="xl"
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
            {/* De Card is nu klikbaar en heeft een hover-effect */}
            <Card 
              shadow="sm" p="lg" radius="md" withBorder h="100%" 
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onClick={() => handleCardClick(article)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Group justify="space-between" mb="sm">
                <Badge color="blue" variant="light">{article.category}</Badge>
                <Group gap={4} c="dimmed">
                  <IconCalendar size="0.9rem" />
                  <Text size="xs">{article.date}</Text>
                </Group>
              </Group>
              <Title order={3} size="h4" mb="xs" c="#1e293b">{article.title}</Title>
              <Text size="sm" c="gray.7" lineClamp={3}>{article.summary}</Text>
              <Text size="sm" c="blue" mt="md" fw={500}>Lees meer →</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* De Modal voor de detailweergave */}
      <Modal 
        opened={opened} 
        onClose={close} 
        title={selectedArticle?.title} 
        size="lg" 
        radius="md"
        centered
      >
        {selectedArticle && (
          <>
            <Group mb="md">
              <Badge color="blue" variant="light">{selectedArticle.category}</Badge>
              <Text size="sm" c="dimmed">{selectedArticle.date}</Text>
            </Group>
            <Text size="md" c="gray.8" style={{ whiteSpace: 'pre-line', lineHeight: 1.7 }}>
              {selectedArticle.content}
            </Text>
          </>
        )}
      </Modal>
    </Container>
  );
}