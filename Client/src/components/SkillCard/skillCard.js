import React from 'react'
import './index.css'

const SkillCard = ({ skill }) => {
  return (
    <div className='skillCard'>
      {skill.image && <span>{skill.image}</span>}
      {skill.skill && <h4>{skill.skill}</h4>}
      {skill.info && <p>{skill.info}</p>}
    </div>
  )
}

export default SkillCard
