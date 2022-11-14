import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../store/actions/question'

const Video = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const question = useSelector(state => state.testReducer.questions[id-1])
  const [video, setVideo] = useState('')

  useEffect(() => {
    if (question){
      if(question.video)
      setVideo(question.video)
      else
      setVideo('')
    }
    else
    setVideo('')
  }, [id, question])

  const onChange = (e) => {
    setVideo(e.target.value)
    const data = {
      id: id,
      property: 'video',
      value: e.target.value
    }
    dispatch(insertQuestion(data))
  }

  return (
    <div>
      <div className='ml-10 mt-16 text-left text-xl uppercase font-bold underline'>video link</div>
      <div className='w-full my-7 bg-[#fffff] border rounded-xl border-gray-300 h-56 relative px-5'>
        <div className='absolute bg-[#3598DB] text-white text-xl px-6 py-3 float-right right-0 mr-10 mt-40 cursor-pointer rounded-sm'>guardar</div>
        <input className='focus:outline-none px-5 py-4 text-xl text-[#C4BEBE] border-none bg-[#f3f3f3] w-full mt-10' type='text' value={video} onChange={onChange} />
      </div>
    </div>
  )
}

export default Video