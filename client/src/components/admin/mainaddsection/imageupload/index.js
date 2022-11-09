import React, { useState } from 'react'
import './index.css'
import { saveImage } from '../../../../apis/question'

const ImageUpload = () => {
  const [file, setFile] = useState(null)

  const handlePhoto = (e) => {
    setFile(e.target.files[0])
  }
  const handleSubmit = () => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      saveImage(formData)
    }
  }
  return (
    <div className='addsection-image-section'>
      <img src='/assets/icons/Main Image.png' alt='mainImage' style={{ marginBottom: '-70px' }} />
      <form encType='multipart/form-data'>
        <img className='uploadbutton-image' src='/assets/icons/Upload Cloud.png' htmlFor='upload' alt='uploadImage' />
        <div className='upload-button'>
          <input type='file' accept='.png, .jpg, .jpeg' name='photo' id='upload' onChange={handlePhoto} hidden />
          <label>Drag and Drop or <label htmlFor='upload' className='browse-text'>Browse</label> to upload</label>
        </div>
        <div style={{ cursor: 'pointer' }} onClick={handleSubmit}>Upload</div>
      </form>
    </div>
  )
}

export default ImageUpload
