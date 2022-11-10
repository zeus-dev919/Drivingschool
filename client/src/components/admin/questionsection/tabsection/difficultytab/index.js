import React, { useEffect } from 'react'
import './index.css'
import SelectField from '../../selectfield';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../../store/actions/question'

const DifficultyTab = props => {
  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id - 1])
  const dispatch = useDispatch()

  useEffect(() => {
    if(question){
      if (document.getElementById(question.difficulty) !== null)
        document.getElementById(question.difficulty).checked = true
    }
  }, [])
  const difficultyGroup = document.getElementsByName('difficulty');
  const onChange = (e) => {
    Object.keys(difficultyGroup).map((key) => {
      if (difficultyGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          const data = {
            id: id,
            property: 'difficulty',
            value: e.target.id
          }
          dispatch(insertQuestion(data))
        }
        else {
          const data = {
            id: id,
            property: 'difficulty',
            value: null
          }
          dispatch(insertQuestion(data))
        }
      }
      else
        difficultyGroup[key].checked = false
      return 0
    })
  }
  return (
    <div>
      <div className='tag-tabs-underline'>Dificultad</div>
      <SelectField name='difficulty' id='difficulty 1' onChange={onChange} />
      <SelectField name='difficulty' id='difficulty 2' onChange={onChange} />
      <SelectField name='difficulty' id='difficulty 3' onChange={onChange} />
      <SelectField name='difficulty' id='difficulty 4' onChange={onChange} />
      <SelectField name='difficulty' id='difficulty 5' onChange={onChange} />
    </div>
  )
}

export default DifficultyTab