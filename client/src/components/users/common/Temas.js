import React, { useState } from 'react'
import { temas } from '../../../utils/texts'

const Category = ({ category = '', selectedCategory, setSelectedCategory }) => {
  const onCategoryClick = () => {
    if (selectedCategory === category.id)
      setSelectedCategory('')
    else
      setSelectedCategory(category.id)
  }
  return (
    <div className='flex-col justify-center px-32 py-5 mb-3 text-2xl uppercase text-white bg-[#7BC6F8] w-full cursor-pointer' id={category.id} onClick={onCategoryClick}>
      {category.text}
    </div>
  )
}

const Tema = ({ tema = {}, selectedTema, setSelectedTema }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const onTemaClick = () => {
    if (selectedTema === tema.id)
      setSelectedTema('')
    else
      setSelectedTema(tema.id);
  }
  return (
    <>
      <div className='flex-col justify-center px-32 py-5 mb-3 text-2xl uppercase text-white bg-[#3598DB] w-full cursor-pointer' id={tema.id} onClick={onTemaClick}>
        {tema.text}
      </div>
      {
        selectedTema === tema.id ?
          (
            <div>
              {
                tema.categories.map((category, key) => {
                  return <Category category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} key={key} />
                })
              }
            </div>
          )
          :
          (
            <div className='hidden'>
              {
                tema.categories.map((category, key) => {
                  return <Category category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} key={key} />
                })
              }
            </div>
          )
      }
    </>
  )
}

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