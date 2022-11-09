import React, { useState, useEffect } from 'react'
import './index.css'
import TagTab from './tagtab';
import VideoTab from './videotab';
import DifficultyTab from './difficultytab';

const TabSection = props => {
  const [tab, setTab] = useState(1)
  const [content, setContent] = useState((<></>));
  const handleClick = (data) => {
    switch (data.id) {
      case 1:
        setTab(data.id)
        document.getElementById('tags-slider').style.visibility = 'visible';
        document.getElementById('video-slider').style.visibility = 'hidden';
        document.getElementById('dificultad-slider').style.visibility = 'hidden';
        break;
      case 2:
        setTab(data.id)
        document.getElementById('tags-slider').style.visibility = 'hidden';
        document.getElementById('video-slider').style.visibility = 'visible';
        document.getElementById('dificultad-slider').style.visibility = 'hidden';
        break;
      case 3:
        setTab(data.id)
        document.getElementById('tags-slider').style.visibility = 'hidden';
        document.getElementById('video-slider').style.visibility = 'hidden';
        document.getElementById('dificultad-slider').style.visibility = 'visible';
        break;
      default:
        document.getElementById('tags-slider').style.visibility = 'visible';
    }
  }

  useEffect(() => {
    if (tab === 1)
      setContent(<TagTab setProblem={props.setProblem} problem={props.problem} />);
    else if (tab === 2)
      setContent(<VideoTab setProblem={props.setProblem} problem={props.problem} />)
    else
      setContent(<DifficultyTab setProblem={props.setProblem} problem={props.problem} />)
  }, [tab, props.problem, props.setProblem])

  return (
    <>
      <div className='tabs'>
        <div className='tabs-tab-section' onClick={() => handleClick({ id: 1 })}>
          <div className='tabs-tab'>tags</div>
          <div id='tags-slider' className='slider'></div>
        </div>
        <div className='tabs-tab-section' onClick={() => handleClick({ id: 2 })}>
          <div className='tabs-tab'>video</div>
          <div id='video-slider' className='slider'></div>
        </div>
        <div className='tabs-tab-section' onClick={() => handleClick({ id: 3 })}>
          <div className='tabs-tab'>dificultad</div>
          <div id='dificultad-slider' className='slider'></div>
        </div>
      </div>
      <div className='slider-line'></div>
      {content}
    </>
  )
}

export default TabSection