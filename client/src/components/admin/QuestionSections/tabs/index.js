import React, { useState, useEffect } from 'react'
import TagsSection from './tags'
import Video from './Video'
import Difficulty from './Difficulty'

const Tab = ({ name = '', selectedTab, setSelectedTab }) => {
  return (
    <>
      <div className='flex flex-col justify-center cursor-pointer' onClick={() => setSelectedTab(name)}>
        <div className='py-4 w-32 bg-[#3598DB] text-xl text-white rounded-xl uppercase'>
          {name}
        </div>
        <div className='pt-4'>
          {
            selectedTab === name ?
              <div className='h-0.5 w-32 bg-[#3598DB]' /> :
              <div className='h-0.5 w-32 bg-[#3598DB]' hidden />
          }
        </div>

      </div>
    </>
  )
}

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('tags')
  let string;
  switch (selectedTab) {
    case 'tags':
      string = (<TagsSection />)
      break
    case 'videos':
      string = (<Video />)
      break
    case 'difficulty':
      string = (<Difficulty />)
      break
    default:
      string = (<TagsSection />)
  }
  return (
    <>
      <div className='flex flex-row justify-start gap-12 mt-7'>
        <Tab name='tags' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Tab name='videos' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Tab name='difficulty' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className='w-full h-0.5 bg-[#E1E3E5]' />
      {
        string
      }
    </>
  )
}

export default Tabs