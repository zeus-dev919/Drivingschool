import React, { useEffect } from 'react'
import SelectField from '../../selectfield'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../../store/actions/question'

const TagTabs = () => {
  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id - 1])
  const dispatch = useDispatch()

  useEffect(() => {
    if(question){
      if (document.getElementById(question.tag) !== null)
        document.getElementById(question.tag).checked = true
    }
  }, [id, question])
  const tagGroup = document.getElementsByName('tagtab');
  const onChange = (e) => {
    Object.keys(tagGroup).map((key) => {
      if (tagGroup[key].id === e.target.id) {
        if (e.target.checked === true){
          const data = {
            id: id,
            property: 'tag',
            value: e.target.id
          }
          dispatch(insertQuestion(data))
        }
        else{
          const data = {
            id: id,
            property: 'tag',
            value: null
          }
          dispatch(insertQuestion(data))
        }
      }
      else
        tagGroup[key].checked = false
      return 0
    })
  }
  return (
    <div>
      <div className='tag-tabs-underline'>tag tabs</div>
      <SelectField name='tagtab' id='killer test' onChange={onChange} />
      <SelectField name='tagtab' id='gemela' onChange={onChange} />
      <SelectField name='tagtab' id='new pregunta' onChange={onChange} />
    </div>
  )
}

export default TagTabs