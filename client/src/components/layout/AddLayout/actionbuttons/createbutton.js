import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionButton from './questionbutton'

const CreateButton = props => {
  const navigate = useNavigate()

  const handleClick = () => {
    props.setLists(props.lists.concat(<QuestionButton id={props.lists.length+1} key={props.lists.length} />))
    navigate(`${props.lists.length + 1}`)
  }

  return(
    <div className='sidebuttongroup-button add-button' onClick={handleClick}>
      <div className='sidebuttongroup-text'>Agregar pregunta</div>
    </div>
  )
}

export default CreateButton