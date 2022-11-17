import React, { useState } from 'react'
import Category from './Category'

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
      <div className='flex-col justify-center px-32 py-5 mb-3 text-2xl uppercase text-white bg-[#3598DB] w-full cursor-pointer hover:bg-blue-400' id={tema.id} onClick={onTemaClick}>
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
            <></>
          )
      }
    </>
  )
}

export default Tema