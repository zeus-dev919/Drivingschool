import React from 'react'
import './index.css'
import SelectField from '../../selectfield';

const DifficultyTab = props => {
  const difficultyGroup = document.getElementsByName('difficulty');

  const onChange = (e) => {
    Object.keys(difficultyGroup).map((key) => {
      if (difficultyGroup[key].id === e.target.id) {
        if (e.target.checked === true)
          props.setProblem({ ...props.problem, difficulty: e.target.id })
        else
          props.setProblem({ ...props.problem, difficulty: null })
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