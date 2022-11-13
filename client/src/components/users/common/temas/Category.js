import React, { useState } from 'react'
import OptionalTest from '../tests/OptionalTest'

const Category = ({ category = '', selectedCategory, setSelectedCategory }) => {

  const onCategoryClick = () => {
    if (selectedCategory === category.id)
      setSelectedCategory('')
    else
      setSelectedCategory(category.id)
  }

  return (
    <>
      <div className='flex-col justify-center px-32 py-5 mb-3 text-2xl uppercase text-white bg-[#7BC6F8] w-full cursor-pointer hover:bg-blue-400' id={category.id} onClick={onCategoryClick}>
        {category.text}
      </div>
      <>
        {
          selectedCategory === category.id ?
            (
              <div>
                <OptionalTest />
                <OptionalTest />
                <OptionalTest />
                <OptionalTest />
              </div>
            )
            :
            (
              <></>
            )
        }
      </>
    </>

  )
}

export default Category