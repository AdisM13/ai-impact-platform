import { createContext, useState, useContext, type ReactNode } from 'react';

// 1. We definiëren hoe onze data eruitziet (TypeScript)
type QuizContextType = {
  score: number;
  currentQuestion: number;
  addScore: () => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
};

// 2. We maken het Context object aan (nog even leeg)
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// 3. De Provider component: Dit is het "magazijn"
export function QuizProvider({ children }: { children: ReactNode }) {
  // Onze State (het geheugen van de app)
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Functies om de state aan te passen
  const addScore = () => setScore((prev) => prev + 1);
  const nextQuestion = () => setCurrentQuestion((prev) => prev + 1);
  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <QuizContext.Provider value={{ score, currentQuestion, addScore, nextQuestion, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

// 4. Een custom hook om makkelijk bij de data te komen
export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz moet gebruikt worden binnen een QuizProvider');
  }
  return context;
}