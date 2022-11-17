import React, { useState, useEffect } from 'react'
import TodoTest from './tests/TodoTest'
import Temas from './temas'
import { useParams } from 'react-router-dom'
import Modal from './tests/Modal'
import { read } from '../../../apis/test'

const Content = () => {
  const { id } = useParams();
  const [string, setString] = useState()
  const [tests, setTests] = useState([])

  const readTodoTest = async () => {
    const response = await read()
    console.log(response)
    setTests(response)
  }
  useEffect(() => {
    if (id === 'testportemas') {
      setString(
        <>
          <Temas />
        </>
      )
    }
    else if (id === 'todotest') {
      readTodoTest()
    }
    else {
      // setString(<>
      //   <TodoTest num={'01'} status={1} pending={false} timeLeft='00:00:00' />
      //   <TodoTest num={'02'} status={2} pending={false} timeLeft='00:00:00' />
      //   <TodoTest num={'03'} status={3} pending={true} timeLeft='23:26:97' />
      //   <TodoTest num={'04'} status={0} pending={true} timeLeft='10:30:32' />
      //   <TodoTest num={'05'} status={2} pending={false} timeLeft='00:00:00' />
      //   <TodoTest num={'06'} status={2} pending={false} timeLeft='00:00:00' />
      //   <TodoTest num={'07'} status={2} pending={false} timeLeft='00:00:00' />
      // </>)
    }
  }, [id])

  return (
    <>
      {
        tests ?
          (<div className='mt-10'>
            {
              tests.map((test, key) => 
                <TodoTest test={test} key={key} />
              )
            }
            <Modal />
          </div>)
          :
          (<></>)
      }
    </>

  )
}

export default Content