import React, {useEffect} from 'react'
import './index.css'
import Title from './title'
import AnswerFields from './answerfields'
import ImageUpload from './imageupload'
import TabSection from './tabsection'

const QuestionSection = () => {
  useEffect(()=>{
    document.getElementsByClassName('leftbuttongroup')[0].style.height = '100%'
  },[])
  return (
    <div>
      <Title/>
      <ImageUpload/>
      <div className='addsection-answer-section'>
        <AnswerFields/>
      </div>
      <TabSection/>
    </div>
  )
}

export default QuestionSection