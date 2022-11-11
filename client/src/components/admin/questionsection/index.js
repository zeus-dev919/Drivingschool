import React, { useState, useEffect } from 'react'
import './index.css'
import Title from './title'
import AnswerFields from './answerfields'
import ImageUpload from './imageupload'
import TabSection from './tabsection'
import { InfinitySpin } from 'react-loader-spinner'
import { insertQuestion } from '../../../store/actions/question'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const QuestionSection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [question, setQuestion] = useState({});
  const questions = useSelector(state => state.testReducer.questions)
  const [url, setUrl] = useState('')
  useEffect(() => {
    document.getElementsByClassName('leftbuttongroup')[0].style.height = '100%'
  }, [])

  useEffect(() => {
    const x = document.getElementsByClassName('question-button')
    Object.keys(x).map(async (key) => {
      if (x[key].id === id)
        document.getElementById(id).style.backgroundColor = '#4e4e4e'
      else
        document.getElementById(x[key].id).style.backgroundColor = '#ffffff'
    })
  }, [id])
  useEffect(() => {
    if (!question) {
      setQuestion({
        title: '',
        image: null,
        video: '',
        choices: {
          choice1: '',
          choice2: '',
          choice3: '',
          choice4: '',
        },
        answer: '',
        difficulty: '',
        tema: '',
        category: '',
      })
      setUrl('/assets/icons/Main Image.png')
    }
    else {
      if (question.image)
        setUrl(URL.createObjectURL(question.image))
      else
        setUrl('/assets/icons/Main Image.png')
      if (question.answer) {
        const checkboxGroup = document.getElementsByClassName('answer-checkbox');
        Object.keys(checkboxGroup).map((key) => {
          if (checkboxGroup[key].id === question.answer) {
            document.getElementById(question.answer).checked = true
          }
          else {
            checkboxGroup[key].checked = false
          }
          return 0
        })
      }
      else {
        const checkboxGroup = document.getElementsByClassName('answer-checkbox');
        Object.keys(checkboxGroup).map((key) => {
          checkboxGroup[key].checked = false
          return 0
        })
      }
      if (!question.choices) {
        setQuestion({
          ...question, choices: {
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
          }
        })
      }
    }
  }, [question])

  useEffect(() => {
    if (questions)
      setQuestion(questions[id - 1]);
    else
      setQuestion({})
  }, [id, questions])

  const handleChangeTitle = (e) => {
    const data = {
      id: id,
      property: 'title',
      value: e.target.value
    }
    dispatch(insertQuestion(data))
  }

  const handleDropChange = (dropFile) => {
    setUrl(URL.createObjectURL(dropFile))
    const data = {
      id: id,
      property: 'image',
      value: dropFile
    }
    dispatch(insertQuestion(data))
  }

  const onChangeAnswer = (e) => {
    const checkboxGroup = document.getElementsByClassName('answer-checkbox');
    Object.keys(checkboxGroup).map((key) => {
      if (checkboxGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          const data = {
            id: id,
            property: 'answer',
            value: e.target.id
          }
          dispatch(insertQuestion(data))
        }
        else {
          const data = {
            id: id,
            property: 'answer',
            value: ''
          }
          dispatch(insertQuestion(data))
        }
      }
      else {
        checkboxGroup[key].checked = false
      }
      return 0;
    })
  }

  const handleChangeAnswerField = (event) => {
    const { name, value } = event.target;
    const data = {
      id: id,
      property: 'choices',
      value: { ...question.choices, [name]: value }
    }
    dispatch(insertQuestion(data))
  }

  let string = ''
  if (question) {
    string = (
      <div>
        <Title title={question.title} onChange={handleChangeTitle} />
        <ImageUpload image={url} handleDropChange={handleDropChange} />
        <div className='addsection-answer-section'>
          {
            question.choices ?
              (<AnswerFields choices={question.choices} handleChangeAnswerField={handleChangeAnswerField} onChangeAnswer={onChangeAnswer} />)
              : <InfinitySpin
                width='200'
                color="#4fa94d"
              />
          }
        </div>
        <TabSection />
      </div>)
  }
  else {
    <InfinitySpin
      width='200'
      color="#4fa94d"
    />
  }

  return (
    <>
      {string}
    </>
  )
}

export default QuestionSection