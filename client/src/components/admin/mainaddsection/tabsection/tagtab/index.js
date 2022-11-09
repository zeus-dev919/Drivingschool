import React from 'react'
import './index.css'
import SelectField from '../../selectfield'

const TagTab = () => {
  return (
    <>
    <div>
      <div className='tag-tabs-underline'>tag tabs</div>
      <SelectField text='Killer test' />
      <SelectField text='Gemela' />
      <SelectField text='New pregunta' />
    </div>
      <div>
        <div className='tag-tabs-underline'>tag temas</div>
        <SelectField text='definicions' bold={true} />
        <SelectField text='1 el uso las vias.' bold={true} />
        <SelectField text='2 las maniobras.' bold={true} />
        <SelectField text='3 ls senalizacion.' bold={true} />
        <SelectField text='4 las luces del vehiculo.' bold={true} />
        <SelectField text='5 el uso del vehiculo.' bold={true} />
        <SelectField text='6 la documentacion.' bold={true} />
        <SelectField text='7 accidentes y los factores que intervienen.' bold={true} />
        <SelectField text='8 comportamiento en caso de accidente.' bold={true} />
        <SelectField text='9 informacion basica del vehiculo.' bold={true} />
        <SelectField text='10 tecnicas de conduccion.' bold={true} />

      </div>
    </>
  )
}

export default TagTab