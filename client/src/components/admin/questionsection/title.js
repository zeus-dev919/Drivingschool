import React, {useState, useEffect} from 'react'

const Title = props => {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
    props.setProblem({ ...props.problem, title: e.target.value })
  }
  useEffect(() => {
    if (props.problem.title === null || props.problem.title === undefined || props.problem.title === '')
      setTitle('')
    else
      setTitle(props.problem.title)
  }, [])
  return(
    <>
      <input type='text' placeholder='Titulo de la pregunta' className='addsection-title' value={title} onChange={handleChange} />
    </>
  )
}

export default Title