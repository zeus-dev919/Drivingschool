import React from 'react'
import './index.css'

const DifficultyTab = props => {
  const difficultyGroup = document.getElementsByClassName('selectfield-checkbox');

  const onChange = (e) => {
    Object.keys(difficultyGroup).map((key) => {
      if (difficultyGroup[key].name === e.target.name) {
        if (e.target.checked === true)
          props.setProblem({ ...props.problem, difficulty: e.target.name })
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
      <div className='selectfield'>
        <input className='selectfield-checkbox' type='checkbox' name='difficulty1' onChange={onChange} />
        <div className='selectfield-text'>star 1</div>
      </div>
      <div className='selectfield'>
        <input className='selectfield-checkbox' type='checkbox' name='difficulty2' onChange={onChange} />
        <div className='selectfield-text'>star 2</div>
      </div>
      <div className='selectfield'>
        <input className='selectfield-checkbox' type='checkbox' name='difficulty3' onChange={onChange} />
        <div className='selectfield-text'>star 3</div>
      </div>
      <div className='selectfield'>
        <input className='selectfield-checkbox' type='checkbox' name='difficulty4' onChange={onChange} />
        <div className='selectfield-text'>star 4</div>
      </div>
      <div className='selectfield'>
        <input className='selectfield-checkbox' type='checkbox' name='difficulty5' onChange={onChange} />
        <div className='selectfield-text'>star 5</div>
      </div>
    </div>
  )
}

export default DifficultyTab