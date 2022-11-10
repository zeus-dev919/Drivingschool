import React from 'react'
import './index.css'
import Title from './title'
import AnswerFields from './answerfields'
import ImageUpload from './imageupload'
import TabSection from './tabsection'

const QuestionSection = props => {
  return (
    <div id='addsection'>
      <Title setProblem={props.setProblem} problem={props.problem} />
      <ImageUpload setProblem={props.setProblem} problem={props.problem} />
      <div className='addsection-answer-section'>
        <AnswerFields setProblem={props.setProblem} problem={props.problem} />
      </div>
      <TabSection setProblem={props.setProblem} problem={props.problem} />
    </div>
  )
}

export default QuestionSection