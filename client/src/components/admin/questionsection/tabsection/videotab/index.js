import React, { useEffect, useState } from 'react'
import './index.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../../store/actions/question'

const VideoTab = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const questions = useSelector(state => state.testReducer.questions)
  const [question, setQuestion] = useState({});
  const [video, setVideo] = useState('')

  useEffect(() => {
    if (question.video)
      setVideo(question.video)
  }, [question])
  
  useEffect(() => {
    if (questions[id - 1])
      setQuestion(questions[id - 1])
  }, [id, questions])

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
    <>
      <div className='tag-tabs-underline'>video link</div>
      <div className='video-link-section'>
        <input className='video-link-input' type='text' value={video} onChange={onChange} />
      </div>
    </>
  )
}

export default VideoTab