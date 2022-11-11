import React from 'react'

const Title = ({ title = '', onChange }) => {

  return (
    <>
      <input type='text' placeholder='Titulo de la pregunta' className='addsection-title' value={title} onChange={onChange} />
    </>
  )
}

export default Title