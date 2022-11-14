import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { temas } from '../../../../../utils/texts'
import Tag from './Tag'
import Tema from './Tema'

const TagsSection = () => {
  const [selectedTema, setSelectedTema] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id - 1])

  useEffect(() => {
    if (question) {
      if (question.tema)
        setSelectedTema(question.tema)
      else
        setSelectedTema('')
      if (question.category)
        setSelectedCategory(question.category)
      else
        setSelectedCategory('')
    }
    else {
      setSelectedCategory('')
      setSelectedTema('')
    }
  }, [id, question])

  return (
    <div className='text-left'>
      <div className='ml-10 mt-16'>
        <div className='uppercase underline font-bold text-xl'>
          tag tabs
        </div>
        <Tag name='Killer test' tag_id='killertest' />
        <Tag name='Gemela' tag_id='gemela' />
        <Tag name='New pregunta' tag_id='newpregunta' />
      </div>
      <div>
        <div className='ml-10 mt-16'>
          <div className='uppercase underline font-bold text-xl'>
            tag temas
          </div>
          {temas.map((tema, key) => {
            return <Tema
              tema={tema}
              selectedTema={selectedTema}
              setSelectedTema={setSelectedTema}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
              key={key}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default TagsSection