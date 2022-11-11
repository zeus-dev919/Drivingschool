import React from 'react'
import './index.css'
import { FileUploader } from 'react-drag-drop-files'

const ImageUpload = ({ image = '', handleDropChange }) => {
  const fileTypes = ['JPG', 'PNG', 'GIF', 'jpg', 'png', 'gif'];
  return (
    <div className='addsection-image-section'>
      <FileUploader
        handleChange={handleDropChange}
        name="file"
        types={fileTypes}
        children={
          <div>
            <img src={image} alt='mainImage' style={{ marginBottom: '-70px' }} />
            <div>
              <img className='uploadbutton-image' src='/assets/icons/Upload Cloud.png' htmlFor='upload' alt='uploadImage' />
              <div className='upload-button'>
                <div>Drag and Drop or <label htmlFor='upload' className='browse-text'>Browse</label> to upload</div>
              </div>
            </div>
          </div>}
      />
    </div>
  )
}

export default ImageUpload


