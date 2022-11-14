import React from 'react'

import Title from './QuestionSections/Title'
import Image from './QuestionSections/Image'
import Answers from './QuestionSections/Answers'
import Tabs from './QuestionSections/tabs'

const QuestionPart = () => {
  return (
    <>
      <Title />
      <Image />
      <Answers />
      <Tabs />
    </>
  )
}

export default QuestionPart