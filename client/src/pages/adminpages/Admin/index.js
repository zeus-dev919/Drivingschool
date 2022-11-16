import React, { useState, useEffect } from 'react'
import AddButton from '../../../components/admin/addtest/AddButton'
import TestRow from '../../../components/admin/addtest/TestRow'
import { read } from '../../../apis/test'

const Admin = () => {
  const [tests, setTests] = useState([])
  const readData = async () => {
    const response = await read();
    setTests(response)
  }
  
  useEffect(() => {
    readData()
  }, [])

  return (
    <>
      {
        tests ?
          (<div className='relative py-14 pr-14'>
            <div className='pr-48 ml-24 mr-14 overflow-auto'>
              <AddButton />
            </div>
            <div className='px-20 py-14'>
              {
                tests.map((test, key) =>
                  <TestRow num={test.no} count={test.count} key={key}/>
                )
              }
            </div>
          </div>)
          :
          (<></>)
      }
    </>
  )
}

export default Admin
