import React from 'react'
import './index.css'
import TagTabs from './tagtabs'
import TagTemas from './tagtemas'

const TagTab = props => {
  return (
    <>
      <TagTabs setProblem = {props.setProblem} problem = {props.problem}/>
      <TagTemas setProblem={props.setProblem} problem={props.problem} />
    </>
  )
}

export default TagTab