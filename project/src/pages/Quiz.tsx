import {Button, Card, Container, Progress, Stack, Text, Title} from '@mantine/core'
import {useQuiz} from '../context/QuizContext'
import {quizQuestions} from '../data/quizData'

export default function Quiz() {
  // Haal de data en functies uit onze Context!
  const {score, currentQuestion, addScore, nextQuestion, resetQuiz} = useQuiz()

  // Is de quiz afgelopen?
  const isFinished = currentQuestion >= quizQuestions.length

  const handleAnswer = (answer: string) => {
    if (answer === quizQuestions[currentQuestion].correct) {
      addScore()
    }
    nextQuestion()
  }

  return (
    <Container size="sm" py="xl">
      <Title order={1} ta="center" mb="xl" c="#1e293b">
        AI of Mens Quiz
      </Title>

      {/* Voortgangsbalk */}
      <Progress
        value={(currentQuestion / quizQuestions.length) * 100}
        mb="xl"
        color="#0369a1"
        size="lg"
        radius="xl"
        aria-label="Voortgang van de quiz"
      />

      {isFinished ? (
        // EINDSCHERM
        <Card shadow="md" radius="lg" p="xl" withBorder ta="center">
          <Title order={2} mb="md">
            Quiz Voltooid!
          </Title>
          <Text size="xl" mb="xl">
            Je score is:{' '}
            <strong>
              {score} van de {quizQuestions.length}
            </strong>
          </Text>
          <Button onClick={resetQuiz} size="lg" color="#0369a1">
            Opnieuw Proberen
          </Button>
        </Card>
      ) : (
        // VRAGENSCHERM
        <Card shadow="md" radius="lg" p="xl" withBorder>
          <Text size="sm" c="gray.7" mb="xs">
            Vraag {currentQuestion + 1} van {quizQuestions.length}
          </Text>
          <Title order={3} mb="xl" fw={500}>
            {quizQuestions[currentQuestion].text}
          </Title>

          <Stack gap="md">
            {quizQuestions[currentQuestion].options.map(option => (
              <Button key={option} variant="outline" size="lg" onClick={() => handleAnswer(option)} fullWidth color='#0369a1'>
                {option}
              </Button>
            ))}
          </Stack>
        </Card>
      )}
    </Container>
  )
}
