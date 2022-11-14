import React from 'react'
import AddButton from '../../../components/admin/addtest/AddButton'
import TestRow from '../../../components/admin/addtest/TestRow'

const Admin = () => {
  return (
    <div className='relative py-14 pr-14'>
      <div className='pr-48 ml-24 mr-14 overflow-auto'>
        <AddButton />
      </div>
      <div className='px-20 py-14'>
        <TestRow num={'01'} />
        <TestRow num={'02'} />
      </div>
    </div>
  )
}

export default Admin
