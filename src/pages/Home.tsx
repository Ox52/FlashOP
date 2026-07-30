import React, { useState } from 'react'

import { questionBank } from '@/data'


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import type { Flashcard } from "@/types/quiz";

type HomeProps = {
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestions: React.Dispatch<React.SetStateAction<Flashcard[]>>;
};

const Home = ({setQuizStarted , setQuestions}:HomeProps) => {


  const [topic,SetTopic] = useState("")
const [questionCount , SetQuestionCount] = useState(10)

const handelStart = ()=>{

  if(!topic){
    alert("please select a topic")
    return
    
  }

  if(questionCount < 1 ||questionCount > 10){
    alert("Question count must be between 1 and 10.");
  return;


  }


  const selectedQuestions =
  questionBank[topic as keyof typeof questionBank].slice(0,questionCount);

  setQuestions(selectedQuestions)

  setQuizStarted(true)



  
}

 
  return (
    <div className=' flex flex-col items-center justify-center mt-42'>


        <h1 className=' font-semibold text-2xl'>Master Programming Flashcards</h1>

        
        

        <Card className='w-full  mt-10  max-w-md text-center'>
  <CardHeader>
    <CardTitle>
      <h1 className='mb-3 text-3xl font-bold  '> Start quiz</h1>
    </CardTitle>
    <CardDescription className='mb-8 text-muted-foreground'>Practice coding concepts and track your progress.</CardDescription>
 
  </CardHeader>
  <CardContent className='flex  mb-6 items-center justify-between'>
 
  <Select
  value={topic}
  onValueChange={(value)=>SetTopic(value)}
  >
  <SelectTrigger>
    <SelectValue placeholder="Select a topic" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="go">Go</SelectItem>
    <SelectItem value="typescript">TypeScript</SelectItem>
    <SelectItem value="python">Python</SelectItem>
    <SelectItem value="react">React</SelectItem>
  </SelectContent>
</Select>
  



    
    <div className=''>
       
      <Input 
      type='number'
      value={questionCount}
      placeholder='10'
      min={1}
      max={10}
      onChange={(e)=>SetQuestionCount(Number(e.target.value))}
      />
    </div>
  </CardContent>
  
  <CardFooter className="justify-center">
  <Button onClick={handelStart}>Start</Button>
</CardFooter>


</Card>


        

        
    </div>
  )
}

export default Home