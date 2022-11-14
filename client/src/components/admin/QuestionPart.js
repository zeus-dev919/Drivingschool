import React from 'react'

const Title = ({ title = '', onChange }) => {
  return (
    <>
      <input type='text' placeholder='Titulo de la pregunta' className='addsection-title' onChange={onChange} />
    </>
  )
}
const Question = () => {

  return(
    <>
      <Title />
    </>
  )
}

export default Question