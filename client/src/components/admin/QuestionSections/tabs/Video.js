import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateProblem } from '../../../../actions/problem'

import { toast } from 'react-hot-toast'

const Video = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const problem = useSelector(state => state.problemReducer.problems[id - 1])
  const [video, setVideo] = useState('')

  useEffect(() => {
    if (problem) {
      if (problem.video)
        setVideo(problem.video)
      else
        setVideo('')
    }
    else
      setVideo('')
  }, [id, problem])

  const onChange = (e) => {
    setVideo(e.target.value)

  }

  const onSaveClick = (e) => {
    if (video.startsWith('https://vimeo.com/')) {
      const data = {
        id: id,
        property: 'video',
        value: video
      }
      dispatch(updateProblem(data))
      toast.success('Will save successfully.')
    }
    else
      toast.error('Invalid URL. Please insert with https://vimeo.com/')
  }

  return (
    <div>
      <div className='ml-10 mt-16 text-left text-xl uppercase font-bold underline'>video link</div>
      <div className='w-full my-7 bg-[#fffff] border rounded-xl border-gray-300 h-56 relative px-5'>
        <div className='absolute bg-[#3598DB] text-white text-xl px-6 py-3 float-right right-0 mr-10 mt-40 cursor-pointer rounded-sm' onClick={onSaveClick}>guardar</div>
        <input className='focus:outline-none px-5 py-4 text-xl text-[#C4BEBE] border-none bg-[#f3f3f3] w-full mt-10' placeholder='https://vimeo.com/#vimeo_id' type='text' value={video} onChange={onChange} />
      </div>
    </div>
  )
}

export default Video