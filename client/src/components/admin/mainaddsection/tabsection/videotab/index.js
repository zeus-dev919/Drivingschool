import React from 'react'
import './index.css'

const VideoTab = () => {
  return (
    <>
      <div className='tag-tabs-underline'>video link</div>
      <div className='video-link-section'>
        <div className='video-save-button'>guardar</div>
        <input className='video-link-input' type='url'  />
      </div>
      <div className='video-uploaded-section'>
        <div className='video-uploaded'>
          <img />
          <div className='video-data'>
            <div className='video-title'>explicacion pregunta 12.mp4</div>
            <div className='video-size'>5.8 MB</div>
          </div>
          <img src='/assets/icons/Delete.png' alt='download'/>
          <img src='/assets/icons/Delete.png' alt='delete' />
        </div>    
      </div>
    </>
  )
}

export default VideoTab