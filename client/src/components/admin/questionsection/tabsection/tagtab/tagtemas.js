import React, { useEffect, useState } from 'react'
import SelectField from '../../selectfield'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../../store/actions/question'

const TagTemas = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState('');
  const questions = useSelector(state => state.testReducer.questions)
  const dispatch = useDispatch()

  useEffect(() => {
    if (question) {
      if (question.tema) {
        const temaGroup = document.getElementsByName('tema');
        Object.keys(temaGroup).map(async (key) => {
          if (temaGroup[key].id === question.tema) {
            document.getElementById(question.tema).checked = true
            document.getElementsByName(question.tema)[0].style.display = 'block'
          }
          else {
            temaGroup[key].checked = false
            if (document.getElementsByName(temaGroup[key].id)[0]) {
              document.getElementsByName(temaGroup[key].id)[0].style.display = 'none'
              const categoryGroup = document.getElementsByName(temaGroup[key].id);
              Object.keys(categoryGroup).map(async (key) => {
                categoryGroup[key].checked = false
              })
            }
          }
          return 0
        })
      }
      if (question.category) {
        const categoryGroup = document.getElementsByName(document.getElementById(question.category).name);
        Object.keys(categoryGroup).map(async (key) => {
          if (categoryGroup[key].id === question.category) {
            document.getElementById(question.category).checked = true
          }
          else {
            categoryGroup[key].checked = false
          }
          return 0
        })
      }
    }
  }, [question])

  useEffect(() => {
    if (questions[id - 1])
      setQuestion(questions[id - 1])
  }, [id, questions])

  const onChange = (e) => {
    const temaGroup = document.getElementsByName('tema');
    Object.keys(temaGroup).map(async (key) => {
      if (temaGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          document.getElementsByName(e.target.id)[0].style.display = 'block'
          if (document.getElementById(question.category) !== null) {
            document.getElementById(question.category).checked = false;
          }
          const data = {
            id: id,
            property: 'tema',
            value: e.target.id
          }
          await dispatch(insertQuestion(data))
          const newData = {
            id: id,
            property: 'category',
            value: null
          }
          dispatch(insertQuestion(newData))
        }
        else {
          document.getElementsByName(e.target.id)[0].style.display = 'none'
          const data = {
            id: id,
            property: 'tema',
            value: null
          }
          dispatch(insertQuestion(data))
        }
      }
      else {
        temaGroup[key].checked = false
        if (document.getElementsByName(temaGroup[key].id)[0]) {
          document.getElementsByName(temaGroup[key].id)[0].style.display = 'none'
          const categoryGroup = document.getElementsByName(temaGroup[key].id);
          Object.keys(categoryGroup).map(async (key) => {
            categoryGroup[key].checked = false
          })
        }
      }
    })
  }

  const handleChange = (e) => {
    const categoryGroup = document.getElementsByName(e.target.name)
    Object.keys(categoryGroup).map((key) => {
      if (categoryGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          const data = {
            id: id,
            property: 'category',
            value: e.target.id
          }
          dispatch(insertQuestion(data))
        }
        else {
          const data = {
            id: id,
            property: 'category',
            value: null
          }
          dispatch(insertQuestion(data))
        }
      }
      else {
        categoryGroup[key].checked = false
      }
      return 0
    })
  }
  return (
    <div>
      <div className='tag-tabs-underline'>tag temas</div>
      <SelectField name='tema' id='tema 00' onChange={onChange} />
      <div name='tema 00' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 0' id='category 0.1' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 01' onChange={onChange} />
      <div name='tema 01' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 1' id='category 1.1' onChange={handleChange} />
        <SelectField name='category 1' id='category 1.2' onChange={handleChange} />
        <SelectField name='category 1' id='category 1.3' onChange={handleChange} />
        <SelectField name='category 1' id='category 1.4' onChange={handleChange} />
        <SelectField name='category 1' id='category 1.5' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 02' onChange={onChange} />
      <div name='tema 02' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 2' id='category 2.1' onChange={handleChange} />
        <SelectField name='category 2' id='category 2.2' onChange={handleChange} />
        <SelectField name='category 2' id='category 2.3' onChange={handleChange} />
        <SelectField name='category 2' id='category 2.4' onChange={handleChange} />
        <SelectField name='category 2' id='category 2.5' onChange={handleChange} />
        <SelectField name='category 2' id='category 2.6' onChange={handleChange} />
        <SelectField name='category 2' id='category 2.7' onChange={handleChange} />
        <SelectField name='category 2' id='category 2.8' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 03' onChange={onChange} />
      <div name='tema 03' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 3' id='category 3.1' onChange={handleChange} />
        <SelectField name='category 3' id='category 3.2' onChange={handleChange} />
        <SelectField name='category 3' id='category 3.3' onChange={handleChange} />
        <SelectField name='category 3' id='category 3.4' onChange={handleChange} />
        <SelectField name='category 3' id='category 3.5' onChange={handleChange} />
        <SelectField name='category 3' id='category 3.6' onChange={handleChange} />
        <SelectField name='category 3' id='category 3.7' onChange={handleChange} />
        <SelectField name='category 3' id='category 3.8' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 04' onChange={onChange} />
      <div name='tema 04' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 4' id='category 4.1' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 05' onChange={onChange} />
      <div name='tema 05' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 5' id='category 5.1' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 06' onChange={onChange} />
      <div name='tema 06' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 6' id='category 6.1' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 07' onChange={onChange} />
      <div name='tema 07' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 7' id='category 7.1' onChange={handleChange} />
        <SelectField name='category 7' id='category 7.2' onChange={handleChange} />
        <SelectField name='category 7' id='category 7.3' onChange={handleChange} />
        <SelectField name='category 7' id='category 7.4' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 08' onChange={onChange} />
      <div name='tema 08' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 8' id='category 8.1' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 09' onChange={onChange} />
      <div name='tema 09' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 9' id='category 9.1' onChange={handleChange} />
      </div>
      <SelectField name='tema' id='tema 10' onChange={onChange} />
      <div name='tema 10' style={{ paddingLeft: '80px', display: 'none' }}>
        <SelectField name='category 10' id='category 10.1' onChange={handleChange} />
      </div>
    </div>
  )
}

export default TagTemas