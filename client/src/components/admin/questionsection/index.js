import React, {useState, useEffect} from 'react'
import './index.css'
import Title from './title'
import AnswerFields from './answerfields'
import ImageUpload from './imageupload'
import TabSection from './tabsection'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const QuestionSection = () => {
  const {id} = useParams();
  const question = useSelector(state => state.testReducer.questions[id-1])

  useEffect(()=>{
    document.getElementsByClassName('leftbuttongroup')[0].style.height = '100%'
    console.log(`I am page ${id}`)
  },[id, question])

  return (
    <div>
      <Title question = {question} />
      <ImageUpload question={question} />
      <div className='addsection-answer-section'>
        <AnswerFields question={question}/>
      </div>
      <TabSection question={question} />
    </div>
  )
}

export default QuestionSection