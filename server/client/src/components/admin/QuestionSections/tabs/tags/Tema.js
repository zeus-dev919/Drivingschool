import React from 'react'
import { useDispatch } from 'react-redux'
import { updateProblem } from '../../../../../actions/problem'

import { useParams } from 'react-router-dom'
import Category from './Category'

const Tema = ({ tema = {}, selectedTema, setSelectedTema, selectedCategory, setSelectedCategory }) => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const onTemaChange = () => {
    if (selectedTema === tema.id) {
      setSelectedTema('')
      const data = {
        id: id,
        property: 'tema',
        value: ''
      }
      dispatch(updateProblem(data))
    }
    else {
      setSelectedTema(tema.id);
      const data = {
        id: id,
        property: 'tema',
        value: tema.id
      }
      dispatch(updateProblem(data))
    }

    setSelectedCategory('')
    const data1 = {
      id: id,
      property: 'category',
      value: ''
    }
    dispatch(updateProblem(data1))
  }

  return (
    <>
      <div className='relative py-7 cursor-pointer'>
        <input
          className='float-left w-4 h-4 m-1'
          type='checkbox'
          onChange={onTemaChange}
          checked={selectedTema === tema.id}
        />
        <div className='ml-20 text-[#333333] text-lg uppercase font-bold'>{tema.text}</div>
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