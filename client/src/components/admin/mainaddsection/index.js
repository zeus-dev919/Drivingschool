import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import AnswerFields from './answerfields'
import ImageUpload from './imageupload'
import TabSection from './tabsection'

const MainAddSection = props => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/admin/addtest')
  }
  const handleChange = (e) => {
    props.setProblem({ ...props.problem, title: e.target.value })
  }

  return (
    <div className='addsection'>
      <div className='addsection-return-button' onClick={handleClick}>Incio</div>
      <div className='addsection-container' id='addsection'>
        <input type='text' placeholder='Titulo de la pregunta' className='addsection-title' onChange={handleChange} />
        <ImageUpload setProblem={props.setProblem} problem={props.problem} />
        <div className='addsection-answer-section'>
          <AnswerFields setProblem={props.setProblem} problem={props.problem} />
        </div>
        <TabSection setProblem={props.setProblem} problem={props.problem} />
      </div>
    </div>
  )
}

export default MainAddSection