import React from 'react'

const WorkCard = ({ work }) => {
  return (
    <div id={work.id} key={work.id} className='ecard'>
      {work.name && <h4>{work.name}</h4>}
      {work.description && <p>{work.description}</p>}
      {work.repoLink && <p>{work.repoLink}</p>}
      {work.deployLink && <p>{work.deployLink}</p>}
    </div>
  )
}

export default WorkCard
