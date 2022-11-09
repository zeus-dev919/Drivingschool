import React, { useState, useEffect } from 'react'
import './index.css'
import { FileUploader } from 'react-drag-drop-files'

const ImageUpload = props => {
  const fileTypes = ['JPG', 'PNG', 'GIF', 'jpg', 'png', 'gif'];
  const [image, setImage] = useState(null)

  const handleDropChange = (dropFile) => {
    props.setProblem({...props.problem, image: dropFile});
    setImage(URL.createObjectURL(dropFile));
  }

  useEffect(() => {
    if (image === null) {
      setImage('/assets/icons/Main Image.png')
    }
    else
      setImage(image)
  }, [image])

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

  // < form encType = 'multipart/form-data' >

