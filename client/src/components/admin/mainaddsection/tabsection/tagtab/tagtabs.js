import React from 'react'
import SelectField from '../../selectfield'

const TagTabs = props => {
  const tagGroup = document.getElementsByName('tagtab');
  const onChange = (e) => {
    Object.keys(tagGroup).map((key) => {
      if (tagGroup[key].id === e.target.id) {
        if (e.target.checked === true)
          props.setProblem({ ...props.problem, tag: e.target.id })
        else
          props.setProblem({ ...props.problem, tag: null })
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