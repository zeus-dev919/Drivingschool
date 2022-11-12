import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionButton from './questionbutton'
import { useSelector, useDispatch } from 'react-redux'
import { deleteQuestion } from '../../../../store/actions/question'

import toast from 'react-hot-toast'

const CreateButton = props => {
  const navigate = useNavigate()
  const questions = useSelector(state => state.testReducer.questions)
  const dispatch = useDispatch();

  const deleteClick = async (e) => {
    const id = Number(e.target.id.slice(0, e.target.id.indexOf(" ")))
    const data = {
      id: id
    }
    await toast.promise(dispatch(deleteQuestion(data)),
      {
        loading: 'deleting',
        success: 'success',
        error: 'failed'
      })
    // props.setLists((current) => current.filter((list, index) => index !== current.length - 1))
    const updatedLists = [...props.lists];
    updatedLists.slice(0,props.lists.length-1);
    props.setLists(updatedLists);

  }

  const handleClick = () => {
    const id = props.lists.length + 1;
    if (id === questions.length + 1) {
      props.setLists(props.lists.concat(<QuestionButton id={id} key={id} deleteClick={deleteClick} />))
      navigate(`${id}`)
    }
    else {
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