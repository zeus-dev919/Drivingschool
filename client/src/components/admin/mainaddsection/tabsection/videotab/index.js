import React from 'react'
import './index.css'

const VideoTab = () => {
  return (
    <>
      <div className='tag-tabs-underline'>video link</div>
      <div className='video-link-section'>
        <div className='video-save-button'>guardar</div>
        <input className='video-link-input' type='url' />
      </div>
      <div className='video-uploaded-section'>
        <div className='video-uploaded'>
          <div style={{display: 'flex', gap: '10px'}}>
            <img src='/assets/icons/video.png' alt='video png' />
            <div className='video-data'>
              <div className='video-title'>explicacion pregunta 12.mp4</div>
              <div className='video-size'>5.8 MB</div>
            </div>
          </div>
          <div src='video-image-button-group'>
            <img className='video-download-button' src='/assets/icons/Download.png' alt='download' />
            <img className='video-delete-button' src='/assets/icons/Delete.png' alt='delete' />
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoTab