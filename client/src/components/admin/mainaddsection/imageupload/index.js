import React from 'react'
import './index.css'

const ImageUpload = () => {
  return (
    <div className='addsection-image-section'>
      <img src='/assets/icons/Main Image.png' alt='mainImage' />
      <img className='upload-image' src='/assets/icons/Upload Cloud.png' alt='uploadImage' />
      <div className='upload-text'>Drag and Drop or <a >Browse</a> to upload</div>
    </div>
  )
}

export default ImageUpload
