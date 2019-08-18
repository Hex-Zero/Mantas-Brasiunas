import React from 'react'
import VideoCards from './VideoCards'
import About from '../assets/About'
import uuid from 'uuid'
const Projects = () => {
	const [ cardInfo ] = React.useState([
		{
			url: 0,
			title: 'Vita Smile Photograpy',
			content: 'Landing page for a local family run photograpy bussiness',
			git: 'https://github.com/Hex-Zero/VitaSmilePhotography',
			web: 'https://vita-smile-photography.uk/'
		},
		{
			url: 1,
			title: 'Ravenouse',
			content: 'Practise reciving JSON data from Yelp API',
			git: 'https://github.com/Hex-Zero/React-Codecademy',
			web: 'https://hex-zero.github.io/React-Codecademy/'
		},
		{
			url: 2,
			title: 'Budget Calculator',
			content: 'Exploration of React-Hooks in a budget calculator application',
			git: 'https://github.com/Hex-Zero/React-Hook-App',
			web: 'https://hex-zero.github.io/React-Hook-App/'
		},
		{
			url: 3,
			title: 'My First Website',
			content: 'My first steps in JavaScript, Made a classic memory game',
			git: 'https://github.com/Hex-Zero/xFirst',
			web: 'https://hex-zero.github.io/xFirst/main.html'
		}
	])

	return (
		<div className='projects'>
			<h1 className='projectTitle'>Projects</h1>
			<div className='fbox'>
				{cardInfo.map(({ classDummy, url, title, content, git, web }) => (
					<VideoCards
						classDummy={classDummy}
						key={uuid()}
						url={url}
						title={title}
						content={content}
						git={git}
						web={web}
					/>
				))}
				<About />
			</div>
		</div>
	)
}
export default Projects
