import React, {useState, useEffect} from 'react'
import './index.css'
import SelectField from '../../selectfield';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { insertQuestion } from '../../../../../store/actions/question';

const DifficultyTab = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const questions = useSelector(state => state.testReducer.questions)
  const [question, setQuestion] = useState({});

  useEffect(() => {
    if (question.difficulty) {
      const difficultyGroup = document.getElementsByName('difficulty');
      Object.keys(difficultyGroup).map((key) => {
        if (difficultyGroup[key].id === question.difficulty) {
          document.getElementById(question.difficulty).checked = true
        }
        else
          difficultyGroup[key].checked = false
        return 0
      })
    }
    else {
      const difficultyGroup = document.getElementsByName('difficulty');
      Object.keys(difficultyGroup).map((key) => {
        difficultyGroup[key].checked = false
        return 0
      })
    }
  }, [question])

  useEffect(() => {
    if (questions[id - 1])
      setQuestion(questions[id - 1])
  }, [id, questions])

  const onChange = (e) => {
    const difficultyGroup = document.getElementsByName('difficulty');
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