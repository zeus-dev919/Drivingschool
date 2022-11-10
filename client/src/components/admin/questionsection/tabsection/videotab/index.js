import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import './index.css'

const VideoTab = props => {
  const [link, setLink] = useState('')
  const onChange = (e) => {
    setLink(e.target.value)
  }
  const handleClick = () => {
    console.log(link)
    if (link === undefined || link === null || link === '')
      toast.error('Please fill the vimeo link.')
    else {
      props.setProblem({ ...props.problem, video: link });
      toast.success('Saved')
    }
  }
  useEffect(() => {
    if (props.problem.video !== undefined)
      setLink(props.problem.video)
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