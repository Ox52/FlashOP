import type { Flashcard } from "@/types/quiz";

export const goQuestions: Flashcard[] = [
  {
    id: 1,
    question: "What is Go?",
    answer: "A statically typed, compiled programming language developed by Google."
  },
  {
    id: 2,
    question: "What keyword is used to declare a variable in Go?",
    answer: "The 'var' keyword or the short declaration operator ':='."
  },
  {
    id: 3,
    question: "What is a package in Go?",
    answer: "A way to organize and reuse Go code."
  },
  {
    id: 4,
    question: "What is the entry point of a Go program?",
    answer: "The main() function in the main package."
  },
  {
    id: 5,
    question: "What is a goroutine?",
    answer: "A lightweight thread managed by the Go runtime."
  },
  {
    id: 6,
    question: "What are channels in Go?",
    answer: "They allow goroutines to communicate safely."
  },
  {
    id: 7,
    question: "What is a struct?",
    answer: "A custom data type that groups related fields."
  },
  {
    id: 8,
    question: "What is an interface in Go?",
    answer: "A type that defines a set of method signatures."
  },
  {
    id: 9,
    question: "How are errors commonly handled in Go?",
    answer: "By returning an error value and checking if it is nil."
  },
  {
    id: 10,
    question: "What command runs a Go program?",
    answer: "go run filename.go"
  }
];