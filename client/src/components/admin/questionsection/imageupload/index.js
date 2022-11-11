import React, { useState, useEffect } from 'react'
import './index.css'
import { FileUploader } from 'react-drag-drop-files'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../store/actions/question'

const ImageUpload = () => {
  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id-1])
  const dispatch = useDispatch()

  const fileTypes = ['JPG', 'PNG', 'GIF', 'jpg', 'png', 'gif'];
  const [image, setImage] = useState(null)

  const handleDropChange = (dropFile) => {
    console.log(dropFile)
    setImage(URL.createObjectURL(dropFile));
    const data = {
      id: id,
      property: 'image',
      value: dropFile
    }
    dispatch(insertQuestion(data))
  }

  useEffect(() => {
    if (question) {
      question.image ? setImage(URL.createObjectURL(question.image)) : setImage('/assets/icons/Main Image.png')
    }
    else
      setImage('/assets/icons/Main Image.png')
  }, [id, question])

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


