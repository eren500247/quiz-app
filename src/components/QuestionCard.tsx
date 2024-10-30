import React from 'react'
import { AnswerObject } from '../App'
import { Wrapper } from '../App.style'
import { ButtonWrapper } from './QuestionCard.style'

type Props = {
  question : string,
  answers : string[],
  callback : (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer : AnswerObject | undefined,
  questionNo : number,
  totalQuestions : number
}

const QuestionCard : React.FC<Props> = ({question,answers,callback,userAnswer,questionNo,totalQuestions}) => {
  return (
    <Wrapper>
      <p className='number'> Question : {questionNo}/{totalQuestions}</p>
      <p dangerouslySetInnerHTML={{__html: question}} />
      <div>
        {
          answers.map((answer,index)=>(
            <ButtonWrapper key={index} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
              <button value={answer} disabled={userAnswer ? true : false} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}} />
              </button>
            </ButtonWrapper>
          ))
        }
      </div>
    </Wrapper>
  )
}

export default QuestionCard