import React, { useEffect } from 'react'
import SelectField from '../../selectfield'

const TagTemas = props => {
  useEffect(() => {
    if (document.getElementById(props.problem.tema) !== null) {
      document.getElementById(props.problem.tema).checked = true
      document.getElementsByName(props.problem.tema)[0].style.display = 'block'
    }
    if (document.getElementById(props.problem.category) !== null)
      document.getElementById(props.problem.category).checked = true
  }, [])
  const temaGroup = document.getElementsByName('tema');
  const onChange = (e) => {
    Object.keys(temaGroup).map((key) => {
      if (temaGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          document.getElementsByName(e.target.id)[0].style.display = 'block'
          if (document.getElementById(props.problem.category) !== null) {
            document.getElementById(props.problem.category).checked = false;
          }
          props.setProblem({ ...props.problem, tema: e.target.id, category: null })
        }
        else {
          document.getElementsByName(e.target.id)[0].style.display = 'none'
          props.setProblem({ ...props.problem, tema: null })
        }
      }
      else {
        temaGroup[key].checked = false
        document.getElementsByName(temaGroup[key].id)[0].style.display = 'none'
      }
      return 0
    })
  }

  const handleChange = (e) => {
    const categoryGroup = document.getElementsByName(e.target.name)
    Object.keys(categoryGroup).map((key) => {
      if (categoryGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          props.setProblem({ ...props.problem, category: e.target.id })
        }
        else {
          props.setProblem({ ...props.problem, category: null })
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