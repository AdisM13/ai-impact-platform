import {
  Container,
  Title,
  Text,
  Accordion,
  SimpleGrid,
  Card,
  Button,
  List,
} from '@mantine/core';
import { IconDownload, IconBook } from '@tabler/icons-react';
import { faqData } from '../data/faqData';

export default function Kennisbank() {
  return (
    <Container size="lg" py="xl">
      {/* Introductie */}
      <Title order={1} mb="sm" c="#1e293b">
        Kennisbank
      </Title>
      <Text size="lg" c="gray.7" mb="3rem" maw={800}>
        Kunstmatige Intelligentie (AI) is overal. Maar hoe werkt het nu echt? In
        onze kennisbank leggen we de belangrijkste begrippen en ethische
        kwesties helder en begrijpelijk uit.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {/* LINKERKANT: Veelgestelde Vragen (Accordion) */}
        <div>
          <Title order={2} size="h3" mb="md" c="#1e293b">
            Veelgestelde Vragen (FAQ)
          </Title>
          <Accordion variant="separated" radius="md">
            {faqData.map((item) => (
              <Accordion.Item key={item.id} value={item.id}>
                <Accordion.Control
                  icon={<IconBook size="1.2rem" color="#0ea5e9" />}
                >
                  <Text fw={600} c="#1e293b">
                    {item.question}
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text c="gray.7">{item.answer}</Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        {/* RECHTERKANT: Artikelen & Downloads */}
        <div>
          <Title order={2} size="h3" mb="md" c="#1e293b">
            Bronnen & Hulpmiddelen
          </Title>
          <Card shadow="sm" p="xl" radius="md" withBorder bg="#f8fafc" mb="xl">
            <Title order={3} size="h4" mb="sm" c="#1e293b">
              Downloadbare Infographic
            </Title>
            <Text size="sm" c="gray.7" mb="md">
              Wil je dit op school of thuis laten zien? Download onze visuele
              infographic over de impact van AI op de samenleving.
            </Text>
            <Button
              component="a"
              href="https://digital-strategy.ec.europa.eu/nl/news/commission-launches-ai-act-service-desk-and-single-information-platform-support-ai-act" // Link naar een echte pagina
              target="_blank" 
              rel="noopener noreferrer"
              leftSection={<IconDownload size="1rem" />}
              variant="light"
              color="blue"
            >
              Bekijk EU Bronnen over AI
            </Button>
          </Card>

          <Card shadow="sm" p="xl" radius="md" withBorder>
            <Title order={3} size="h4" mb="sm" c="#1e293b">
              Waar moet je op letten?
            </Title>
            <Text size="sm" c="gray.7" mb="sm">
              Bij het lezen over AI is het belangrijk om kritisch te zijn. Let
              op deze punten:
            </Text>
            <List size="sm" spacing="xs" c="gray.7">
              <List.Item>
                Controleer of de bron betrouwbaar is (bijv. een universiteit of
                overheid).
              </List.Item>
              <List.Item>
                Kijk of er meerdere bronnen zijn die hetzelfde zeggen.
              </List.Item>
              <List.Item>
                Pas op met bangmakerij (sensatie) in het nieuws.
              </List.Item>
            </List>
          </Card>
        </div>
      </SimpleGrid>
    </Container>
  );
}
