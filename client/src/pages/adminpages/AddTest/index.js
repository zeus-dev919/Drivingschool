import React from 'react'
import AddButton from '../../../components/admin/addtest/AddButton'
import TestRow from '../../../components/admin/addtest/TestRow'
import './index.css'

const AddTest = () => {
  return (
    <div className='add-test-container'>
      <div className='add-button-section'>
        <AddButton />
      </div>
      <div className='view-tests-container'>
        <TestRow />
      </div>
    </div>
  )
}

export default AddTest
