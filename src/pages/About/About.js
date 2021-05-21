import React from 'react'
import Picture from './profile_picture.jpg'
import './index.css'

const About = _ => {
  return (
    <div className='section' id='about'>
      <div id='about__imageDiv'>
        <img id='about__image' src={Picture} alt='Sammi' />
      </div>
      <h1 id='about__title'>About Me</h1>
      <p id='about__info'>
        In 2019 I attended a full stack development boot camp to learn more about web development and fell in love with it. Learning to code while working a full time job was challenging to say the least; it taught me discipline, time management, and dedication. I learned to work smarter not harder, that Javascript can actually be fun, and that finding bugs in code is a lot better than examining real bugs in a laboratory as I had sometimes done in my previous roles as a biologist. My new knowledge spurred me to make a career change in 2020 and I moved from being a microbiologist who coded on weekends to a full time web developer on the daily.
        <hr className='about__line' />
        My professional experience includes working at a fast-paced start-up, Divercity.io, a company focused on promoting diverse hiring in the tech industry. It has taught me to be flexible and agile (both in my own development style and in our team methodology). It has also taught me how to work in new code bases quickly, how to refactor other's code, and how to learn new tools or languages even faster than I had done in my bootcamp. I became the most proficient member of our team in Chart.js for React in less than a week after starting from zero knowledge. I learned Next.js on the fly while developing a new feature and still managed to deliver the front end ahead of schedule. From this experience I've gained a wealth of knowledge in a short period of time, both about myself and development, and look forward to applying this in my future endeavors.
        <hr className='about__line' />
        Thanks for checking out my portfolio and for your interest in me and my work! Feel free to browse through my projects above, or scroll below to get in touch with me. I'd love to hear about any projects you may be working on, new things I may be able to learn, or even the most interesting podcast you've listened to recently. I love connecting with others to build up our work and learn from each other :)
      </p>
    </div>
  )
}

export default About
