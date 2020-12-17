import React from 'react'
import './index.css'

const WorkCard = ({ work }) => {
  return (
    <div id={work.title} key={work.title} className='workCard'>
      {work.type && <h3 class='workCard__item'>{work.type}</h3>}
      {work.picture && <img src={work.picture} alt={work.title} class='workCard__image' />}
      {work.title && <h4 class='workCard__item'>{work.title}</h4>}
      {work.description && <p class='workCard__item'>{work.description}</p>}
      <div>
        {work.repoLink && <a class='workCard__link' id='workCard__repoLink' href={work.repoLink}>Repository</a>}
        {work.deployedLink && <a class='workCard__link' id='workCard__deployedLink' href={work.deployedLink}>Deployed</a>}
      </div>
      {work.skills.length > 0 && <p class='workCard__item'>Skills used: {work.skills.join(', ')}</p>}
    </div>
  )
}

export default WorkCard
