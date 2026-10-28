import { Container, Title, Text } from '@mantine/core';

export default function Quiz() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">AI of Mens Quiz</Title>
      <Text>Test hier of jij het verschil ziet tussen een tekst geschreven door een AI of door een mens!</Text>
    </Container>
  );
}