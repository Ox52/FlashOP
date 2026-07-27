
import { useState } from "react";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { Routes, Route } from "react-router-dom";
import type { Flashcard } from "./types/quiz";



export function App() {

  const [quizStarted , setQuizStarted] =useState(false)
  const [questions, setQuestions] = useState<Flashcard[]>([]);
  return (
    <>
    <Navbar/>

<main className=" min-h-screen bg-background">

 {!quizStarted? (

  <Home 
  
  setQuizStarted ={setQuizStarted}
  setQuestions={setQuestions}
  />
 ) :(

  <Quiz questions={questions} />
 )}





</main>
    
    
    </>
    


  
    
  
   
  );
}

export default App;
