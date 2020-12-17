import {
  Gifmaker,
  Hangman,
  Nutrition,
  CraigsList,
  IMDB,
  Avatar,
  TrainSchedule,
  Trivia,
  Divercity
} from './images'

const projects = [
  {
    type: 'Experience',
    title: 'Diversity Score',
    description: 'stuff',
    deployedLink: 'divercity.io/score',
    repoLink: '',
    skills: ['Javascript', 'React', 'React hooks', 'Chart.js', 'Redux', 'Moment.js', 'HTML', 'CSS'],
    picture: Divercity
  },
  {
    type: 'Project',
    title: 'Online Purchasing App',
    description: 'stuff',
    deployedLink: 'https://peaceful-hamlet-84638.herokuapp.com/',
    repoLink: 'https://github.com/Pandapoc/DefinitelyNotCraigslist/tree/master',
    skills: ['Javascript', 'MySQL', 'Sequelize', 'Express', 'MomentJS', 'HTML', 'CSS', 'Bluma.io', 'AWS storage', 'Heroku'],
    picture: CraigsList
  },
  {
    type: 'Project',
    title: 'Movie Info and Watch App',
    description: 'stuff',
    deployedLink: 'https://damp-peak-16146.herokuapp.com/',
    repoLink: 'https://github.com/the-incrudibles/DefinitelyNotIMDB',
    skills: ['Javascript', 'React', 'React hooks', 'MongoDB', 'Mongoose', 'Express', 'API consumption', 'HTML', 'CSS', 'Materialize', 'Herkou', 'Passport'],
    picture: IMDB
  },
  {
    type: 'Project',
    title: 'No Such Thing as a Trivia Game',
    description: 'stuff',
    deployedLink: 'https://spflores.github.io/TriviaGame/',
    repoLink: 'https://github.com/SPFlores/TriviaGame',
    skills: ['Javascript', 'HTML', 'CSS', 'Materialize'],
    picture: Trivia
  },
  {
    type: 'Project',
    title: 'Supernatural Hangman',
    description: 'stuff',
    deployedLink: 'https://spflores.github.io/Word-Guess-Game/',
    repoLink: 'https://github.com/SPFlores/Word-Guess-Game',
    skills: ['Javascript', 'HTML', 'CSS', 'Materialize'],
    picture: Hangman
  },
  {
    type: 'Project',
    title: 'Avatar RPG Game',
    description: 'stuff',
    deployedLink: 'https://spflores.github.io/unit-4-game/',
    repoLink: 'https://github.com/SPFlores/unit-4-game',
    skills: ['Javascript', 'HTML', 'CSS', 'Materialize'],
    picture: Avatar
  },
  {
    type: 'Project',
    title: 'Superhero .gif Generator',
    description: 'stuff',
    deployedLink: 'https://spflores.github.io/GifMaker/',
    repoLink: 'https://github.com/SPFlores/GifMaker',
    skills: ['Javascript', 'API consumption', 'HTML', 'CSS', 'Materialize'],
    picture: Gifmaker
  },
  {
    type: 'Project',
    title: 'Train Scheduler',
    description: 'stuff',
    deployedLink: 'https://spflores.github.io/Train-Scheduler/',
    repoLink: 'https://github.com/SPFlores/Train-Scheduler',
    skills: ['Javascript', 'Moment.js', 'HTML', 'CSS', 'Materialize', 'Firebase'],
    picture: TrainSchedule
  },
  {
    type: 'Project',
    title: 'Recipe and Nutrition Tracker',
    description: 'stuff',
    deployedLink: 'https://must-have-caffine-project.firebaseapp.com/',
    repoLink: 'https://github.com/Pandapoc/Must-Have-Caffeine-Project',
    skills: ['Javascript', 'HTML', 'CSS', 'Materialize', 'Firebase'],
    picture: Nutrition
  }
]

export default projects
