import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import './index.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../../store/actions/question'

const VideoTab = props => {
  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id - 1])
  const dispatch = useDispatch()

  const [link, setLink] = useState('')
  const onChange = (e) => {
    setLink(e.target.value)
  }
  const handleClick = () => {
    if (link === undefined || link === null || link === '')
      toast.error('Please fill the vimeo link.')
    else {
      const data = {
        id: id,
        property: 'video',
        value: link
      }
      dispatch(insertQuestion(data))
      toast.success('Saved')
    }
  }
  useEffect(() => {
    if (question) {
      if (question.video !== undefined)
        setLink(question.video)
    }
  }, [])
  return (
    <>
      <div className='tag-tabs-underline'>video link</div>
      <div className='video-link-section'>
        <div className='video-save-button' onClick={handleClick}>guardar</div>
        <input className='video-link-input' type='url' value={link} onChange={onChange} />
      </div>
    </>
  )
}

export default VideoTab