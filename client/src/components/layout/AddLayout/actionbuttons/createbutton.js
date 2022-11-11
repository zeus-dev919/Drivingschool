import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionButton from './questionbutton'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const CreateButton = props => {
  const navigate = useNavigate()
  const questions = useSelector(state => state.testReducer.questions)

  const handleClick = () => {
    const id = props.lists.length + 1;
    
    if( id === questions.length + 1){
      props.setLists(props.lists.concat(<QuestionButton id={id} key={id - 1} />))
      navigate(`${id}`)

    }
    else{
      toast.error('No se puede crear más. Por favor complete la pregunta vacía actual.')
    }
    
  }

  return (
    <div className='sidebuttongroup-button add-button' onClick={handleClick}>
      <div className='sidebuttongroup-text'>Agregar pregunta</div>
    </div>
  )
}

export default CreateButton