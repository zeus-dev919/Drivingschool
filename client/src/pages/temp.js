import './temp.css'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const data = [
  {
    no: 'A',
    description: 'alumbrado, neumáticos, frenos y suspensión.',
    selected: true,

  }, {
    no: 'B',
    description: 'frenos, neumáticos, airbags y cinturones de seguridad.',
    selected: true,

  }, {
    no: 'C',
    description: 'cinturones de seguridad, airbags, apoyacabezas y casco.',
    selected: false,
  },
]

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const numbers2 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

const Temp = () => {
  const questions = useSelector(state => state.testReducer.questions)
  const [question, setQuestion] = useState('')

  return (
    <>
      <div className="temp-container">
        <div className='temp-body'>
          <img src="/assets/icons/image1.png" className='temp-img' />
          <div>
            <div className='temp-title'>Los sistemas de seguridad pasiva incluyen</div>
            {
              data.map((item) => {
                return (
                  <div className='temp-row'>
                    {
                      item.selected ? <div className='temp-no-box'>{item.no}</div> : <div className='temp-no-spec-box'>{item.no}</div>
                    }

                    <div className='temp-description'>{item.description}</div>
                  </div>
                )
              })
            }
            <button className='temp-button temp-left-btn'>ANTERIOR</button>
            <button className='temp-button'>SIGUIENTE</button>
          </div>
        </div>
        <div className='temp-numbers'>
          {numbers1.map((number) => (
            <div className='temp-num-box'>{number}</div>
          ))}

        </div>
        <div className='temp-numbers'>
          {numbers2.map((number) => (
            <div className='temp-num-box'>{number}</div>
          ))}
        </div>


      </div>
    </>
  )
}

export default Temp;