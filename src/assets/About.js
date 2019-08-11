import React from 'react'
import styled from 'styled-components'
const About = () => {
	return (
		<div className='About'>
			<Title>My View</Title>
			<Content>
				We live in a vast, complex and enticing world. I am highly fascinated by it. For all
				its variety and colors are amazing to behold. As it changes and advances around us
				every day faster than the last, I feel enthusiastic about adapting and learning.
				Because whenever I get to advance my knowledge, it opens up my eyes and allows me to
				see the world in more detail. Thus, as my knowledge grows the world becomes fuller
				and more complete.
			</Content>
			<Title>Motivation</Title>
			<Content>
				Everyone is driven by different motivations in life. One of my main motivations is
				the pride in the work that I do. The feeling that you get when your work is admired
				by everyone is amazing. Altho an even greater motivation in my eyes is competition.
				My performance increases exponentially if I have a difficult task or a strong
				competitor. And in seems like there is always some goal to reach or champion to
				catch up to.
			</Content>
			<Title>Team Player</Title>
			<Content>
				Working as a part of the team is a privilege, that is not to be taken lightly. Not
				only do you need to keep yourself going, but helping and motivating your teammates
				is the way to achieve greatness. Cooperation amplifies everyone's abilities when
				they are on the same page. With my clear communication and confidence any task can
				be achieved with ease. After all Team work makes the dream work.
			</Content>
			<Title>Work Flow</Title>
			<Content>
				Every task is just a list of problems and challenges that you need to overcome. The
				first step is to figure out what every item in that list is. And then my favorite
				part, resolving the problems one by one. It can get challenging and even seem
				impossible at times. Altho when you find the solution it is rewarding beyond belief.
				My ability to solve any problem that I come across in my ventures is astounding
				everyone. My approach to problems is not only to resolve them, but also to optimize
				the result. Which to me is one of my greatest strengths
			</Content>
			<Title>Joke Of The Day</Title>
			<Content>
				Did you hear about the mathematician who's afraid of negative numbers? <br /> He'll
				stop at nothing to avoid them.
			</Content>
		</div>
	)
}
const Title = styled.p`
	font-size: 18px;
	font-weight: 500;
`
const Content = styled.p`text-align: left;`

export default About
