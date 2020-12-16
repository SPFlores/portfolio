import React from 'react'
import './index.css'

const WorkCard = ({ work }) => {
  return (
    <div id={work.title} key={work.title} className='workCard'>
      {work.picture && <span>{work.picture}</span>}
      {work.title && <h4>{work.title}</h4>}
      {work.description && <p>{work.description}</p>}
      {work.repoLink && <p>{work.repoLink}</p>}
      {work.deployedLink && <p>{work.deployedLink}</p>}
      {work.skills.length > 0 && work.skills.join(', ')}
    </div>
  )
}

export default WorkCard
