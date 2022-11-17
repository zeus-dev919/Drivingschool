import React, { useState } from 'react'
import { temas } from '../../../../utils/texts'
import Tema from './Tema'

const Temas = () => {
  const [selectedTema, setSelectedTema] = useState('');

  return (
    <div className='flex flex-col text-center'>
      {temas.map((tema, key) => {
        return <Tema tema={tema} selectedTema={selectedTema} setSelectedTema={setSelectedTema} key={key} />
      })}
    </div>
  )
}

export default Temas