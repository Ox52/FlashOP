import { useState } from "react";
import FlashCard from "../components/FashCard";
import type { Flashcard } from "@/types/quiz";

type QuizProps = {
  questions: Flashcard[];
};

const Quiz = ({ questions }: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent rendering if no questions were passed
  if (questions.length === 0) {
    return (
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold">No questions found.</h2>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex]!;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert("🎉 Quiz Finished!");
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-4xl px-4">
      <FlashCard
        question={currentQuestion}
        current={currentIndex + 1}
        total={questions.length}
        onNext={handleNext}
      />
    </div>
  );
};

export default Quiz;