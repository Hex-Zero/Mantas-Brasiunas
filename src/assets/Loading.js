import React from 'react'
import styled, { keyframes } from 'styled-components'
const Loading = () => {
	return (
		<React.Fragment>
			<Back />
			<Rotating>
				<div className='layer-1'>
					<div className='layer-2'>
						<div className='layer-3' />
					</div>
				</div>
			</Rotating>
		</React.Fragment>
	)
}

export default Loading

const rotate = keyframes`
    100%{transform:rotate(360deg)}
`
const glow = keyframes`
 0%{box-shadow: 0 0 2px #ff7c00, 0 0 8px #ff7c00;}
  100%{box-shadow: 0 0 8px #ff7c00, 0 0 12px #e21102;}
`
const Back = styled.div`
	margin-top: 69px;
	margin-left: 158px;
	position: absolute;
	background: -moz-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: -webkit-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: -o-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: -ms-linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	background: linear-gradient(45deg, rgba(255, 0, 223, 1) 0%, rgba(255, 255, 0, 1) 100%);
	width: 112px;
	height: 112px;
	z-index: 1;
	border-radius: 50%;
	animation: ${glow} 1s ease-in-out infinite alternate;
`

const Rotating = styled.div`
	margin-top: 75px;
	position: absolute;
	z-index: 1;
	display: flex;
	width: 34%;
	justify-content: center;
	div {
		animation: ${rotate} 1s linear infinite;
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}
	.layer-1 {
		width: 100px;
		height: 100px;
	}
	.layer-1 {
		background: -moz-linear-gradient(0deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
		background: -webkit-linear-gradient(
			0deg,
			rgba(255, 72, 0, 1) 0%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -o-linear-gradient(0deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
		background: -ms-linear-gradient(0deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
		background: linear-gradient(90deg, rgba(255, 72, 0, 1) 0%, rgba(255, 124, 0, 1) 100%);
	}
	.layer-2 {
		background: -moz-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -webkit-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -o-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: -ms-linear-gradient(
			135deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
		background: linear-gradient(
			315deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0) 32%,
			rgba(255, 255, 255, 1) 57%,
			rgba(255, 255, 255, 1) 100%
		);
	}
	.layer-3 {
		background: -moz-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -webkit-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -o-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: -ms-linear-gradient(
			135deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
		background: linear-gradient(
			315deg,
			rgba(255, 85, 0, 0) 0%,
			rgba(255, 103, 0, 0) 47%,
			rgba(255, 110, 0, 1) 65%,
			rgba(255, 115, 0, 1) 79%,
			rgba(255, 124, 0, 1) 100%
		);
	}
`
