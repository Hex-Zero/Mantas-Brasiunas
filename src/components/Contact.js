import React, { useState } from 'react'
import {
	FaPhone,
	FaLinkedin,
	FaFacebookSquare,
	FaTwitter,
	FaInstagram,
	FaYoutubeSquare,
	FaCopy,
	FaMailBulk
} from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'
import uuid from 'uuid'

const Contact = () => {
	const [ alertShow, setAlertShow ] = useState()
	const handleCopy = (x) => {
		var copyText = document.getElementById(x)
		copyText.select()
		document.execCommand('copy')
		setAlertShow(x)
		setTimeout(() => {
			setAlertShow(false)
		}, 2200)
	}

	const [ Icons ] = useState([
		<FaFacebookSquare />,
		<FaInstagram />,
		<FaTwitter />,
		<FaLinkedin />,
		<FaYoutubeSquare />
	])
	const [ Id ] = useState([ 'Facebook', 'Instagram', 'Twitter', 'Linkedin', 'YouTube' ])
	const [ Links ] = useState([
		'https://www.facebook.com/HexZer0',
		'https://www.instagram.com/hexzer0/',
		'https://twitter.com/Hex_Zero_',
		'https://www.linkedin.com/in/mantas-brasiunas/',
		'https://www.youtube.com/channel/UCp6TdUkQsXaBOMYaBc9DrNQ'
	])

	return (
		<div>
			<Alert alertShow={alertShow}>{alertShow} copied</Alert>
			<Title>Contact</Title>
			<A>
				<div className='cover' />
				Name: <Info type='text' value='Mantas Brasiunas' id='Name' />
				<span className='copy'>
					<FaCopy onClick={() => handleCopy('Name')} />
				</span>
			</A>
			<A>
				<div className='cover' />
				Email: <Info type='text' value='Hex0@live.com' id='Email' />
				<span className='copy'>
					<FaMailBulk /> <FaCopy onClick={() => handleCopy('Email')} />
				</span>
			</A>
			<A>
				<div className='cover' />
				Phone: <Info type='text' value='07933640414' id='Phone' />
				<span className='copy'>
					<FaPhone /> <FaCopy onClick={() => handleCopy('Phone')} />
				</span>
			</A>
			<Title>Social Media</Title>
			<Social>
				{Icons.map((icon, index) => (
					<SocialLinks
						id={Id[index]}
						key={uuid()}
						href={Links[index]}
						target='__blank'
						rel='noopener noreferrer'>
						{icon}
					</SocialLinks>
				))}
			</Social>
			<svg width='0' height='0'>
				<radialGradient id='rg' r='150%' cx='30%' cy='107%'>
					<stop stop-color='#fdf497' offset='0' />
					<stop stop-color='#fdf497' offset='0.05' />
					<stop stop-color='#fd5949' offset='0.45' />
					<stop stop-color='#d6249f' offset='0.6' />
					<stop stop-color='#285AEB' offset='0.9' />
				</radialGradient>
			</svg>
			<svg width='0' height='0'>
				<radialGradient id='rgi' r='150%' cx='30%' cy='107%'>
					<stop stop-color='#e1d989' offset='0' />
					<stop stop-color='#e1d989' offset='0.05' />
					<stop stop-color='#ce483b' offset='0.45' />
					<stop stop-color='#c42192' offset='0.6' />
					<stop stop-color='#214dce' offset='0.9' />
				</radialGradient>
			</svg>
		</div>
	)
}
const fade = keyframes`
0%{opacity: 0}
40%{opacity: 1}
60%{opacity: 1}
100%{opacity: 0}
`

const Alert = styled.div`
	width: 150px;
	font-weight: 600;
	font-size: 20px;
	position: fixed;
	background-color: #f86e00;
	color: white;
	left: 0;
	right: 0;
	border: solid 3px white;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	border-radius: 5px;
	padding: 5px 10px;
	z-index: 4;
	opacity: 0;
	animation: ${(props) => (props.alertShow ? fade : false)} 2200ms forwards;
`

const A = styled.a`
	display: block;
	position: relative;
	margin: 3px 10px;
	color: white;
	background: #f86e00;
	border: solid 3px #f86e00;
	padding: 6px 10px;
	border-radius: 6px;
	cursor: pointer;
	&:hover {
		background: #b35306;
	}
	.cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000000;
	}
	.copy {
		position: absolute;
		right: 5px;
		cursor: pointer;
		z-index: 3;
	}
`
const Info = styled.input`
	font-weight: 700;
	color: white;
	background: #00000000;
	border: none;
	&:focus {
		outline: none;
	}
`

const Title = styled.h3`margin-top: 6px;`

const SocialLinks = styled.a`
	font-size: 36px;
	position: relative;
`
const Social = styled.div`
	display: inline;
	#Facebook {
		color: #3b569c;
		&:hover {
			color: #2d4175;
		}
	}
	#Instagram svg * {
		fill: url(#rg);
	}
	#Instagram:hover svg * {
		fill: url(#rgi);
	}
	#Twitter {
		color: #1ea1f2;
		&:hover {
			color: #1575b1;
		}
	}
	#Linkedin {
		color: #0077b5;
		&:hover {
			color: #035a88;
		}
	}
	#YouTube {
		color: #ff1500;
		&:hover {
			color: #bd1303;
		}
	}
`
export default Contact
