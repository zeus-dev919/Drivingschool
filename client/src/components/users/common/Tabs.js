import React, {useState, useEffect} from 'react'

const TabButton = ({ text = '', id = '', href = '', selectedTab, setSelectedTab }) => {
  const onClick = (e) => {
    setSelectedTab(e.target.id)
  }
  return (
    <div className='flex flex-col text-center'>
      <div className='py-4 px-2 bg-[#3598DB] w-48 text-base text-white rounded-sm uppercase cursor-pointer' id={id} onClick={onClick}>
        {text}
      </div>
      {
        selectedTab === id ? <div className='mt-3 h-0.5 w-48 bg-[#3598DB]' /> : <div className='mt-3 h-1 w-48 bg-[#3598DB] hidden' />
      } 
    </div>
  )
}

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('T0');

  return (
    <div className='flex flex-row justify-start gap-4'>
      <TabButton text='todo test' id='T0' href='#' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabButton text='killer test' id='T1' href='#' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabButton text='preguntas gemelas' id='T2' href='#' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabButton text='nuevas preguntas' id='T3' href='#' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabButton text='test por temas' id='T4' href='#' selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  )
}

export default Tabs