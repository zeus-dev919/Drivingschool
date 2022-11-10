import React from 'react'
import './index.css'
import { tagtabs, stars, temas, categories } from '../../../../utils/texts'
const SelectField = ({ onChange, name = '', id = ''}) => {
  let text = '';
  let className = '';

  if(name === 'tema'){
    const temaText = temas.filter((tema) => tema.id === id);
    if (temaText[0] !== undefined)
      text = temaText[0].text
    className = 'selectfield-bold-text'
  }

  if(name.slice(0,8) === 'category'){
    const categoryText = categories.filter((category) => category.id === id);
    if (categoryText[0] !== undefined)
      text = categoryText[0].text
    className = 'selectfield-uppercase-text'
  }

  if(name === 'tagtab') {
    const tabText = tagtabs.filter((category) => category.id === id);
    if (tabText[0] !== undefined)
      text = tabText[0].text
    className = 'selectfield-text'
  }

  if (name === 'difficulty') {
    const starText = stars.filter((category) => category.id === id);
    if (starText[0] !== undefined)
      text = starText[0].text
    className = 'selectfield-text'
  }

  return (
    <div className='selectfield'>
      <input
        className='selectfield-checkbox'
        onChange={onChange}
        name={name}
        id={id}
        type='checkbox'
      />
      <div className={className}>{text}</div>
    </div>
  )
}

export default SelectField;