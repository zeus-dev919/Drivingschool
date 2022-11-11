import React, {useEffect, useState} from 'react'
import './index.css'
import TagTab from './tagtab';
import VideoTab from './videotab';
import DifficultyTab from './difficultytab';

const TabSection = ({tag='', tema= '', category='', video='', onChangeDifficulty, handleChangeVideo}) => {
  const [content, setContent] = useState()

  useEffect(() => {
    if(!content)
      setContent(<TagTab />)
  },[content])

  const handleTabClick = (data) => {
    switch (data.id) {
      case 1:
        setContent(<TagTab />);
        document.getElementById('tags-slider').style.visibility = 'visible';
        document.getElementById('video-slider').style.visibility = 'hidden';
        document.getElementById('dificultad-slider').style.visibility = 'hidden';
        break;
      case 2:
        setContent(<VideoTab />)
        document.getElementById('tags-slider').style.visibility = 'hidden';
        document.getElementById('video-slider').style.visibility = 'visible';
        document.getElementById('dificultad-slider').style.visibility = 'hidden';
        break;
      case 3:
        setContent(<DifficultyTab onChangeDifficulty={onChangeDifficulty} />)
        document.getElementById('tags-slider').style.visibility = 'hidden';
        document.getElementById('video-slider').style.visibility = 'hidden';
        document.getElementById('dificultad-slider').style.visibility = 'visible';
        break;
      default:
        document.getElementById('tags-slider').style.visibility = 'visible';
    }
  }

  return (
    <>
      <div className='tabs'>
        <div className='tabs-tab-section' onClick={() => handleTabClick({ id: 1 })}>
          <div className='tabs-tab'>tags</div>
          <div id='tags-slider' className='slider'></div>
        </div>
        <div className='tabs-tab-section' onClick={() => handleTabClick({ id: 2 })}>
          <div className='tabs-tab'>video</div>
          <div id='video-slider' className='slider'></div>
        </div>
        <div className='tabs-tab-section' onClick={() => handleTabClick({ id: 3 })}>
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