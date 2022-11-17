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
  const problem = useSelector(state => state.problemReducer.problems[id - 1])

  useEffect(() => {
    if (problem) {
      if (problem.tema)
        setSelectedTema(problem.tema)
      else
        setSelectedTema('')
      if (problem.category)
        setSelectedCategory(problem.category)
      else
        setSelectedCategory('')
    }
    else {
      setSelectedCategory('')
      setSelectedTema('')
    }
  }, [id, problem])

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