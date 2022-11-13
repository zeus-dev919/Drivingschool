import React, { useState, useEffect } from 'react'
import TodoTest from './tests/TodoTest'
import Temas from './temas'
import { useParams } from 'react-router-dom'
import Modal from './tests/Modal'

const Content = () => {
  const { id } = useParams();
  const [string, setString] = useState()
  useEffect(() => {
    if (id === 'testportemas') {
      setString(
        <>
          <Temas />
        </>
      )
    }
    else {
      setString(<>
        <TodoTest num={'01'} status={1} pending={false} timeLeft='00:00:00' />
        <TodoTest num={'02'} status={2} pending={false} timeLeft='00:00:00' />
        <TodoTest num={'03'} status={3} pending={true} timeLeft='23:26:97' />
        <TodoTest num={'04'} status={0} pending={true} timeLeft='10:30:32' />
        <TodoTest num={'05'} status={2} pending={false} timeLeft='00:00:00' />
        <TodoTest num={'06'} status={2} pending={false} timeLeft='00:00:00' />
        <TodoTest num={'07'} status={2} pending={false} timeLeft='00:00:00' />
        <Modal />
      </>)
    }
  }, [id])

  return (
    <div className='mt-10'>
      {
        string
      }
    </div>
  )
}

export default Content