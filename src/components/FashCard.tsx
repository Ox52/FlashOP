import React, { useState } from 'react'

import type { Flashcard } from "@/types/quiz";
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

type FlashcardProps ={


    question:Flashcard;
    current:number;
    total:number;
    onNext:()=> void
}

const FlashCard = (

   { question,
    current,
    total,
    onNext}:FlashcardProps
) => {


    const [showAnswer , SetShowAnswer] = useState(false)

    const handelNext =()=>{
        SetShowAnswer(false);
        onNext();

    }


    



  return (


    
    <Card  className='mx-auto max-w-xl'>

        <CardContent className='space-x-8 p-8 text-center'>

            <p className='text-sm text-muted-foreground'>

                Questuion {current}{total}
            </p>

            <h2 className='min-h-24 text-2xl font-semibold'>

                {showAnswer? question.answer: question.question }
            </h2>

            {!showAnswer?

            (

                <Button onClick={()=> SetShowAnswer(true)}>
                    Flip
                </Button>
            ):(


                <Button onClick={handelNext}>

                    next Question
                    
                </Button>
            )
         
        
         
        
        }


        </CardContent>


    </Card>
  )
}

export default FlashCard