import React from 'react'
import './index.css'

const About = _ => {
  return (
    <div className='section' id='about'>
      <div id='about__image'>Image goes here</div>
      <h1 id='about__title'>About Me</h1>
      <p id='about__info'>
        I am originally trained as a biologist, but found a deeper love for coding and development after I attended a full stack development boot camp in 2019. I had pursued a computer science minor while in college but ended up being unable to finish due to conflicting schedules with my major classes. After graduating, I began working in laboratories but never forgot my desire to learn development. After a few years of learning online, I decided to jump in with both feet and enrolled in a part-time but intense boot camp style course at University of California, Irvine. Learning to code while working a full time job was challenging to say the least, it taught me discipline, time management, and dedication. I learned to work smarter not harder, that Javascript can actually be fun, and that finding code bugs is a lot better than examining real bugs in a laboratory.
        <hr className='about__line' />
        My professional experience thus far is working at a fast-paced startup, Divercity.io, a company focused on promoting diverse hiring in the tech industry. It has taught me to be flexible and agile (both in my own development style and in our team methodology). It has also taught me how to work in new code bases quickly, how to refactor other's code, and how to learn new tools or languages even faster than I had done in my bootcamp. I became the most proficient member of our team in Chart.js for React in less than a week after starting from zero knowledge. This knowledge I then leveraged to push out an MVP of a new feature on our website: a powerful new tool to measure diversity in companies, something that directly led to VC funding and, more importantly, supports a cause I personally care about. From this company I've gained a wealth of knowledge in a short period of time, both about myself and development, and look forward to applying this in my future endeavors.
        <hr className='about__line' />
        Thanks for checking out my portfolio and for your interest in me and my work! Feel free to browse through my projects above, or scroll below to get in touch with me. I'd love to hear about any projects you may be working on, new things I may be able to learn, or even the most interesting podcast you've listened to recently. I love connecting with others to build up our work and learn from each other :)
      </p>
    </div>
  )
}

export default About
