import React from 'react'
import AddButton from '../../../components/admin/addtest/AddButton'
import TestRow from '../../../components/admin/addtest/TestRow'
import './index.css'

const Admin = () => {
  return (
    <div className='admin-container'>
      <div className='add-button-section'>
        <AddButton />
      </div>
      <div className='tests-row-container'>
        <TestRow num={'01'} />
        <TestRow num={'02'} />
      </div>
    </div>
  )
}

export default Admin
