import { Container, Title, Text } from '@mantine/core';

export default function ApiData() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">AI Nieuws & Actualiteiten</Title>
      <Text>Hier laden we binnenkort live data in via de TanStack Query API.</Text>
    </Container>
  );
}