import { Container, Title, Text } from '@mantine/core';

export default function Kennisbank() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">Kennisbank</Title>
      <Text>Hier komt onze verzameling artikelen, FAQ en bronnen over de impact van AI.</Text>
    </Container>
  );
}