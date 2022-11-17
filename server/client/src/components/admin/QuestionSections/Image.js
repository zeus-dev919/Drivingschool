import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProblem } from '../../../actions/problem'

import { useParams } from 'react-router-dom'
import { FileUploader } from 'react-drag-drop-files'


const Image = () => {
  const { id } = useParams()
  const problem = useSelector(state => state.problemReducer.problems[id - 1])

  const dispatch = useDispatch()
  const [url, setUrl] = useState('')

  const fileTypes = ['JPG', 'PNG', 'GIF', 'jpg', 'png', 'gif'];

  const handleDropChange = (dropFile) => {
    setUrl(URL.createObjectURL(dropFile))
    const data = {
      id: id,
      property: 'image',
      value: dropFile
    }
    dispatch(updateProblem(data))
  }

  useEffect(() => {
    if (problem) {
      if (problem.image){
        if(typeof(problem.image) === 'object')
         setUrl(URL.createObjectURL(problem.image))
        else
        setUrl(problem.image)
      }
      else
        setUrl('/assets/icons/Main Image.png')
    }
    else
      setUrl('/assets/icons/Main Image.png')
  }, [id, problem])

  return (
    <div className='my-12 px-40'>
      <FileUploader
        handleChange={handleDropChange}
        name="file"
        types={fileTypes}
        children={
          <div className='flex flex-col justify-center items-center'>
            <img src={url} alt='mainImage' className='-mb-14'/>
            <div>
              <img className='cursor-pointer inline-block' src='/assets/icons/Upload Cloud.png' htmlFor='upload' alt='uploadImage' />
              <div>Drag and Drop or <label htmlFor='upload' className='text-[#3A63DE] cursor-pointer'>Browse</label> to upload</div>
            </div>
          </div>}
      />
    </div>
  )
}

export default Image