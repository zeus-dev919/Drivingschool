import React from 'react'
import { useDispatch } from 'react-redux'
import { updateProblem } from '../../../../../actions/problem'
import { useParams } from 'react-router-dom'

const Category = ({ category = '', selectedCategory, setSelectedCategory }) => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const onChange = () => {
    if (selectedCategory === category.id) {
      setSelectedCategory('')
      const data = {
        id: id,
        property: 'category',
        value: ''
      }
      dispatch(updateProblem(data))
    }
    else {
      setSelectedCategory(category.id)
      const data = {
        id: id,
        property: 'category',
        value: category.id
      }
      dispatch(updateProblem(data))
    }
  }

  return (
    <>
      <div className='relative py-7 cursor-pointer pl-16'>
        <input
          className='float-left w-4 h-4 m-1'
          type='checkbox'
          onChange={onChange}
          checked={selectedCategory === category.id}
        />
        <div className='ml-20 text-[#333333] text-lg uppercase'>{category.text}</div>
      </div>
    </>
  )
}

export default Category