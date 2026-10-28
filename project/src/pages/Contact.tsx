import { useState } from 'react';
import { Container, Title, Text, SimpleGrid, TextInput, Textarea, Button, Alert, Paper, Group } from '@mantine/core';
import { IconCheck, IconAlertCircle, IconSend } from '@tabler/icons-react';

export default function Contact() {
  // 1. State voor de formuliervelden
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // 2. State voor de Honeypot (Spamfilter)
  const [honeypot, setHoneypot] = useState('');

  // 3. State voor validatie, loading en succes
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validatie functie
  const validateForm = () => {
    const newErrors: {name?: string, email?: string, message?: string} = {};
    if (!name.trim()) newErrors.name = 'Vul je naam in.';
    if (!email.trim()) {
      newErrors.email = 'Vul je e-mailadres in.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Dit is geen geldig e-mailadres.';
    }
    if (!message.trim()) newErrors.message = 'Vul een bericht in.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Geeft true terug als er geen fouten zijn
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // --- SPAMFILTER CHECK ---
    // Als een bot het honeypot-veld heeft ingevuld, doen we alsof het gelukt is
    // maar sturen we niks. Dit houdt de bot in de waan dat het werkte.
    if (honeypot) {
      console.log('Spam gedetecteerd! Formulier geblokkeerd.');
      setIsSuccess(true); // Laat de bot een succesmelding zien, maar sla niks op
      return;
    }

    // Als het geen spam is, valideren we het formulier
    if (!validateForm()) return;

    // Formulier is geldig, we simuleren een verzending
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Formulier leegmaken
      setName('');
      setEmail('');
      setMessage('');
    }, 1500); // 1.5 seconde delay voor realistisch effect
  };

  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="sm" c="#1e293b">Contact & Actie</Title>
      <Text size="lg" c="gray.7" mb="3rem" maw={800}>
        Heb je een vraag over onze projecten, wil je samenwerken, of wil je je aanmelden als vrijwilliger? 
        Laat een bericht achter en we nemen zo snel mogelijk contact met je op.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        
        {/* LINKERKANT: Contactgegevens (Transparantie Eis) */}
        <Paper shadow="sm" radius="md" p="xl" withBorder bg="#f8fafc">
          <Title order={2} size="h3" mb="md" c="#1e293b">Onze Gegevens</Title>
          <Text c="gray.7" mb="xs"><strong>Stichting AI-Impact</strong></Text>
          <Text c="gray.7" mb="xs">Demostraat 123</Text>
          <Text c="gray.7" mb="xs">1000 Brussel, België</Text>
          <Text c="gray.7" mb="md">E-mail: info@ai-impact.be</Text>
          <Text c="gray.7" mb="md"><strong>KBO-nummer:</strong> 0123.456.789</Text>
          
          <Alert color="blue" title="Privacy (AVG)" variant="light" mt="xl">
            Wij gaan zorgvuldig om met jouw gegevens. Je e-mailadres wordt alleen gebruikt 
            om te antwoorden op jouw bericht en nooit gedeeld met derden.
          </Alert>
        </Paper>

        {/* RECHTERKANT: Het Formulier */}
        <Paper shadow="sm" radius="md" p="xl" withBorder>
          <Title order={2} size="h3" mb="lg" c="#1e293b">Stuur een bericht</Title>

          {/* Succesmelding (Wordt door screenreaders voorgelezen door role="alert") */}
          {isSuccess && !honeypot && (
            <Alert icon={<IconCheck size="1rem" />} title="Gelukt!" color="teal" mb="md" role="alert">
              Je bericht is succesvol verzonden. We nemen snel contact op!
            </Alert>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <TextInput
              label="Naam"
              placeholder="Jouw volledige naam"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              error={errors.name}
              mb="md"
              withAsterisk
              aria-required="true"
            />

            <TextInput
              label="E-mailadres"
              placeholder="naam@voorbeeld.be"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              error={errors.email}
              mb="md"
              withAsterisk
              aria-required="true"
            />

            <Textarea
              label="Bericht"
              placeholder="Waar kunnen we je mee helpen?"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              error={errors.message}
              minRows={4}
              mb="md"
              withAsterisk
              aria-required="true"
            />

            {/* --- DE HONEYPOT (Spamfilter) --- */}
            {/* Deze is onzichtbaar voor mensen, maar bots vullen hem in */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <TextInput
                label="Laat dit veld leeg"
                name="website_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.currentTarget.value)}
                tabIndex={-1} // Zorgt dat toetsenbordgebruikers er niet in kunnen tabben
                autoComplete="off"
              />
            </div>
            {/* ------------------------------- */}

            <Group justify="flex-end" mt="xl">
              <Button 
                type="submit" 
                color="blue" 
                size="md" 
                leftSection={<IconSend size="1rem" />}
                loading={isSubmitting}
              >
                Verstuur bericht
              </Button>
            </Group>
          </form>
        </Paper>

      </SimpleGrid>
    </Container>
  );
}