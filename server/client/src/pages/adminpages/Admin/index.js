import React, { useState, useEffect } from 'react'
import AddButton from '../../../components/admin/addtest/AddButton'
import TestRow from '../../../components/admin/addtest/TestRow'
import { getTests } from '../../../actions/test'
import { useSelector, useDispatch } from 'react-redux'

const Admin = () => {
  const [lists, setLists] = useState([])
  const tests = useSelector(state => state.todoReducer.tests)
  const loading = useSelector(state => state.todoReducer.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTests())
  }, [])

  useEffect(()=>{
    setLists(tests)
  },[loading])

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
                lists.map((list, key) =>
                  <TestRow num={list.no} count={list.count} key={key}/>
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
