import {
  Gifmaker,
  Nutrition,
  CraigsList,
  IMDB,
  Trivia,
  Divercity,
  Peruse,
  Portfolio,
  Landing
} from './images'

const projects = [
  {
    type: 'Experience',
    title: 'Landing Page',
    description: 'Revamped landing page I developed for Divercity.io. Used Next.js to better optimize performance and SEO and decrease technical debt moving forward. Involved extensive animation using Scss/JavaScript only. I was in charge of the architecture for this feature as well as supervising a team of 2 interns. Feature has not been lanuched yet so there is no live link yet.',
    deployedLink: '',
    repoLink: '',
    skills: ['Javascript', 'Next.js', 'React', 'React hooks', 'Redux', 'HTML', 'Sass', 'Internal API consumption', 'Hubspot integration'],
    picture: Landing
  },
  {
    type: 'Experience',
    title: 'Diversity Score',
    description: 'Live website of the feature I worked on for Divercity.io, a company working to promote diverse hiring in the tech space. I worked extensively on the graphs present on the Diversity Score page, including the accessibility feature. I also worked on refactoring old code on the website as a whole.',
    deployedLink: 'divercity.io/score/company/971',
    repoLink: '',
    skills: ['Javascript', 'React', 'React hooks', 'Chart.js', 'Redux', 'Moment.js', 'HTML', 'CSS', 'Internal API consumption'],
    picture: Divercity
  },
  {
    type: 'Project',
    title: 'Job Search Application',
    description: `This is a front end React application that I made in a few days as an 'application' of sorts for a job position. It is a simple job search app that allows a user to search all jobs, filter jobs based on multiple criteria, and apply to jobs if logged in. It is currently not deployed, but a full stack, deployed version is in the works.`,
    deployedLink: '',
    repoLink: 'https://github.com/SPFlores/perUse',
    skills: ['Javascript', 'React', 'HTML', 'CSS', 'API consumption'],
    picture: Peruse
  },
  {
    type: 'Project',
    title: 'Online Purchasing App',
    description: 'In this full stack application, a group of 5 of us worked at making a Craigslit-style application for users to buy and sell items with their neighbors. I worked extensively on the Javascript for this application, especially the browse section.',
    deployedLink: 'https://peaceful-hamlet-84638.herokuapp.com/',
    repoLink: 'https://github.com/Pandapoc/DefinitelyNotCraigslist/tree/master',
    skills: ['Javascript', 'MySQL', 'Sequelize', 'Express', 'Node', 'MomentJS', 'HTML', 'CSS', 'Bluma.io', 'AWS storage', 'Heroku'],
    picture: CraigsList
  },
  {
    type: 'Project',
    title: 'Movie Info and Watch List App',
    description: `This full stack application was completed with a team of 5 other people by my side. I worked mostly on the search section, on the Javascript to handle adding movies to a user's watch list, and consuming the outside API to populate our information pages. I also had a hand in setting up the database and laying out the models.`,
    deployedLink: 'https://damp-peak-16146.herokuapp.com/',
    repoLink: 'https://github.com/the-incrudibles/DefinitelyNotIMDB',
    skills: ['Javascript', 'React', 'React hooks', 'MongoDB', 'Mongoose', 'Express', 'Node', 'API consumption', 'HTML', 'CSS', 'Materialize', 'Herkou', 'Passport'],
    picture: IMDB
  },
  {
    type: 'Project',
    title: 'No Such Thing as a Trivia Game',
    description: 'This trivia game is based off of my favorite podcast, No Such Thing As A Fish, and features some interesting facts from the show. It is pure javescript with some CSS formatting, including Materialize.',
    deployedLink: 'https://spflores.github.io/TriviaGame/',
    repoLink: 'https://github.com/SPFlores/TriviaGame',
    skills: ['Javascript', 'HTML', 'CSS', 'Materialize'],
    picture: Trivia
  },
  // {
  //   type: 'Project',
  //   title: 'Avatar RPG Game',
  //   description: `This game is all Javascript based and pits you against 3 other opponents in an RPG-style clicking game. The difficult elements to work out were the event listeners and the math that allows the game to be won by any player against any opponent, even while the opponents' attack power increases with each turn.`,
  //   deployedLink: 'https://spflores.github.io/unit-4-game/',
  //   repoLink: 'https://github.com/SPFlores/unit-4-game',
  //   skills: ['Javascript', 'HTML', 'CSS', 'Materialize'],
  //   picture: Avatar
  // },
  // {
  //   type: 'Project',
  //   title: 'Superhero .gif Generator',
  //   description: 'A simple gif generator with a superhero theme using the Gify API. Each gif is paused upon loading and can be unpaused with a click. Javascript based, this is a fairly straightforward application.',
  //   deployedLink: 'https://spflores.github.io/GifMaker/',
  //   repoLink: 'https://github.com/SPFlores/GifMaker',
  //   skills: ['Javascript', 'API consumption', 'HTML', 'CSS', 'Materialize'],
  //   picture: Gifmaker
  // },
  // {
  //   type: 'Project',
  //   title: 'Old Portfolio',
  //   description: 'This is the first portfolio I made of my classwork. I used Materialize for the styling and struggled mightily through any and all Javascript involved. Now, I look back on it to see how far I have come and how much more I can do.',
  //   deployedLink: 'https://spflores.github.io/Materalize-Portfolio/',
  //   repoLink: 'https://github.com/SPFlores/Materalize-Portfolio',
  //   skills: ['Javascript', 'HTML', 'CSS', 'Materialize'],
  //   picture: Portfolio
  // }
]

export default projects
