import React from 'react'

const Oldman = ({opponentChoice, result, winCount}) => {
  return (
    <>
    <div className='w-full flex justify-center self-center'>
    <div className='w-[40rem] height-auto'>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 595.28 595.28" enable-background="new 0 0 595.28 595.28">
<g id="Layer_1">
<g>
		<ellipse fill="#341212" cx="301.8" cy="306.65" rx="241.27" ry="249.88"/>
		<g className={result === 'You win!' ? 'down' : result === 'You lose!' ? 'up' : ''} id="whole">
			<path fill="#D7DDB6" d="M515.8,595.28c-19.57-133.84-107.93-147.82-214-147.82c-106.07,0-194.43,13.98-214,147.82H515.8z"/>
			<path fill="#9A9E78" d="M98.02,551.27c-4.37,13-7.81,27.6-10.21,44.01H515.8c-2.4-16.41-5.84-31.01-10.21-44.01H98.02z"/>
			<polygon id="neck" fill="#D68139" points="227.72,257.58 223.6,476.41 377.75,476.41 374.15,257.58 			"/>
			<path id="neckShadow" opacity="0.5" fill="#54381E" d="M374.15,257.58H227.72l-2,124.4c12.82,33.49,41.65,56.99,74.96,56.99h0
				c33.54,0,62.52-23.8,75.22-57.64L374.15,257.58z"/>
			<path id="hair" fill="#ECC8A9" d="M389.27,330.8H214.34c-15.53,0-28.24-12.71-28.24-28.24V212.6c0-15.53,12.71-28.24,28.24-28.24
				h174.93c15.53,0,28.24,12.71,28.24,28.24v89.96C417.5,318.09,404.8,330.8,389.27,330.8z"/>
			<g className={winCount >= 3 ? 'redFace' : ''} id="earLeft">
				<path fill="#D68139" d="M219.7,281.14l1.8-47.1c0.06-1.68-0.62-3.29-1.86-4.42l-12.6-11.35c-2.71-2.44-7-1.72-8.75,1.49l0,0
					c-5,9.16-5.77,20.04-2.09,29.8l12.56,33.36c1.42,3.78,6.23,4.89,9.16,2.13l0,0C219.01,284.03,219.65,282.63,219.7,281.14z"/>
				<path fill="#A2694B" d="M216.01,277.83c0,0-0.01,0-0.01,0c-0.44-0.01-0.8-0.37-0.79-0.82l0.16-10.7l-0.16,0.05
					c-1.18,0.37-2.43,0.25-3.52-0.34c-1.09-0.58-1.88-1.56-2.22-2.74c-0.56-1.92,0.22-4.02,1.91-5.11l3.72-2.4l-0.05-8.66
					c-0.03-5.1-2.03-9.89-5.64-13.5c-1.28-1.27-3.09-1.81-4.86-1.46c-1.77,0.36-3.22,1.58-3.89,3.25c-0.49,1.23-0.51,2.6-0.06,3.84
					l2.8,7.6c0.15,0.42-0.06,0.88-0.48,1.04c-0.42,0.15-0.88-0.06-1.04-0.48l-2.8-7.6c-0.59-1.62-0.57-3.4,0.08-5
					c0.87-2.18,2.77-3.76,5.07-4.23c2.3-0.47,4.66,0.24,6.32,1.89c3.91,3.91,6.08,9.1,6.11,14.63l0.05,9.55l-4.47,2.88
					c-1.09,0.7-1.6,2.06-1.23,3.3c0.22,0.77,0.73,1.4,1.44,1.77c0.7,0.38,1.51,0.45,2.27,0.22l2.28-0.71l-0.19,12.93
					C216.81,277.48,216.45,277.83,216.01,277.83z"/>
			</g>
			<g className={winCount >= 3 ? 'redFace' : ''} id="earRight">
				<path fill="#D68139" d="M380.54,281.14l-1.8-47.1c-0.06-1.68,0.62-3.29,1.86-4.42l12.6-11.35c2.71-2.44,7-1.72,8.75,1.49l0,0
					c5,9.16,5.77,20.04,2.09,29.8l-12.56,33.36c-1.42,3.78-6.23,4.89-9.16,2.13l0,0C381.24,284.03,380.6,282.63,380.54,281.14z"/>
				<path fill="#A2694B" d="M384.24,277.83c-0.44,0-0.8-0.35-0.81-0.79l-0.19-12.93l2.28,0.71c0.76,0.24,1.57,0.16,2.27-0.22
					c0.7-0.38,1.21-1.01,1.44-1.77c0.36-1.24-0.14-2.6-1.23-3.3l-4.47-2.88l0.05-9.55c0.03-5.53,2.2-10.72,6.11-14.63
					c1.66-1.66,4.02-2.37,6.32-1.89c2.3,0.47,4.19,2.05,5.07,4.23c0.64,1.6,0.67,3.38,0.07,5l-2.79,7.6
					c-0.16,0.42-0.61,0.63-1.04,0.48c-0.42-0.15-0.63-0.62-0.48-1.04l2.79-7.6c0.46-1.24,0.44-2.61-0.06-3.84
					c-0.67-1.67-2.13-2.89-3.9-3.25c-1.77-0.35-3.58,0.18-4.86,1.46c-3.61,3.6-5.61,8.4-5.64,13.5l-0.05,8.66l3.72,2.4
					c1.68,1.08,2.47,3.19,1.91,5.11c-0.35,1.18-1.14,2.16-2.22,2.74c-1.09,0.59-2.34,0.7-3.52,0.34l-0.16-0.05l0.16,10.7
					c0.01,0.45-0.35,0.81-0.79,0.82C384.25,277.83,384.24,277.83,384.24,277.83z"/>
			</g>
			<path className={winCount >= 3 ? 'redFace' : ''} id="head" fill="#D68139" d="M300.68,380.62L300.68,380.62c-45.13,0-82.06-36.93-82.06-82.06l4-98.01
				c0-45.13,32.93-82.06,78.06-82.06h0c45.13,0,78.06,36.93,78.06,82.06l4,98.01C382.74,343.69,345.81,380.62,300.68,380.62z"/>
			<path id="beard" fill="#F1CAA3" d="M365.08,340.08L365.08,340.08c-2.55-9.96-13.98-14.48-22.76-9.13
				c-10.53,6.42-23.53,10.26-37.79,10.26h-5.46c-14.35,0-27.4-3.89-37.97-10.38c-8.88-5.46-20.51-0.35-22.83,9.81l-0.57,2.5
				l-1.63,6.1c-9.08,33.98,21.62,66.28,63,66.28h5.46c41.37,0,72.07-32.3,63-66.28L365.08,340.08z"/>
			<path id="mouth" opacity="0.5" fill="#54381E" d="M275.43,306.65h51.57C327.01,306.65,298.8,332.24,275.43,306.65z"/>
			<path id="mustacheLeft" fill="#ECC8A9" d="M182.46,323.36c0,0,58.18,18.96,85.91-45.56c4.8-11.18,18.67-15.12,28.61-8.1l0,0
				c9.37,6.62,10.85,19.93,3.16,28.44C277.79,322.89,230.65,362.35,182.46,323.36z"/>
			<path id="mustacheRight" fill="#ECC8A9" d="M415.67,323.36c0,0-58.18,18.96-85.91-45.56c-4.81-11.18-18.67-15.12-28.61-8.1l0,0
				c-9.37,6.62-10.85,19.93-3.16,28.44C320.33,322.89,367.47,362.35,415.67,323.36z"/>
			<g>
				<g>
					<path fill="#A2694B" d="M284.11,240.61c-0.22,0-0.44-0.09-0.6-0.27c-14.99-16.87-40.85-8.54-41.11-8.46
						c-0.42,0.14-0.88-0.09-1.02-0.51c-0.14-0.42,0.09-0.88,0.51-1.02c0.27-0.09,27.14-8.74,42.82,8.92
						c0.3,0.33,0.26,0.84-0.07,1.14C284.5,240.54,284.3,240.61,284.11,240.61z"/>
					<g id="eyeballLeft">
						<path fill="#EFF1DB" d="M241.11,236.54c0,0,22.86-14.15,43,3.27C284.11,239.8,261.52,255.04,241.11,236.54z"/>
						<path id="pupilLeft" fill="#24211C" d="M269.14,237.65c0,3.61-2.92,6.53-6.53,6.53s-6.53-2.92-6.53-6.53
							c0-3.61,2.92-6.53,6.53-6.53S269.14,234.04,269.14,237.65z"/>
					</g>
					<path className={result === 'You win!' ? 'angryBrowLeft' : winCount > 3 ? 'secondStageLeftBrow' : ''} id="browLeft" fill="#ECC8A9" d="M232.14,229.14l53.04-6.57l-12.47-9.55C272.71,213.02,243.74,217.98,232.14,229.14z"/>
				</g>
				<path fill="#A2694B" d="M261.02,252.43c-11.56,0-19.25-6-19.38-6.1c-0.35-0.28-0.4-0.78-0.13-1.13c0.28-0.35,0.79-0.4,1.13-0.13
					c0.74,0.59,18.49,14.36,40.98-2.52c0.35-0.27,0.86-0.2,1.13,0.16c0.27,0.36,0.2,0.86-0.16,1.13
					C275.91,250.37,267.8,252.43,261.02,252.43z"/>
			</g>
			<g>
				<g>
					<path fill="#A2694B" d="M323.54,240.61c-0.19,0-0.38-0.07-0.54-0.2c-0.33-0.3-0.36-0.81-0.07-1.14
						c15.68-17.66,42.55-9.01,42.82-8.92c0.42,0.14,0.65,0.6,0.51,1.02c-0.14,0.42-0.6,0.66-1.02,0.51
						c-0.26-0.08-26.14-8.4-41.11,8.46C323.99,240.52,323.77,240.61,323.54,240.61z"/>
					<g id="eyeballRight">
						<path fill="#EFF1DB" d="M366.55,236.54c0,0-22.86-14.15-43,3.27C323.54,239.8,346.13,255.04,366.55,236.54z"/>
						<path id="pupilRight" fill="#24211C" d="M338.51,237.65c0,3.61,2.92,6.53,6.53,6.53c3.61,0,6.53-2.92,6.53-6.53
							c0-3.61-2.92-6.53-6.53-6.53C341.44,231.11,338.51,234.04,338.51,237.65z"/>
					</g>
					<path className={result === 'You win!' ? 'angryBrowRight' : winCount > 3 ? 'secondStageRightBrow' : ''} id="browRight" fill="#ECC8A9" d="M375.52,229.14l-53.04-6.57l12.47-9.55C334.94,213.02,363.92,217.98,375.52,229.14z"/>
				</g>
				<path fill="#A2694B" d="M346.63,252.43c-6.78,0-14.88-2.06-23.57-8.59c-0.36-0.27-0.43-0.77-0.16-1.13
					c0.27-0.35,0.77-0.43,1.13-0.16c22.49,16.87,40.23,3.11,40.97,2.52c0.35-0.27,0.85-0.22,1.13,0.13
					c0.28,0.35,0.22,0.85-0.13,1.13C365.89,246.43,358.19,252.43,346.63,252.43z"/>
			</g>
			<path fill="#A2694B" d="M250.45,299.44c-0.34,0-0.66-0.22-0.77-0.57l-2.93-9.47c-1.48-4.8-4.99-8.67-9.62-10.62
				c-4.56-1.92-8.23-5.66-10.06-10.26l-4.22-10.64c-0.16-0.41,0.04-0.88,0.45-1.05c0.41-0.16,0.88,0.04,1.05,0.45l4.22,10.64
				c1.67,4.2,5.02,7.62,9.18,9.37c5.07,2.13,8.91,6.37,10.54,11.63l2.93,9.47c0.13,0.42-0.11,0.88-0.53,1.01
				C250.61,299.43,250.53,299.44,250.45,299.44z"/>
			<path fill="#A2694B" d="M348.99,299.44c-0.08,0-0.16-0.01-0.24-0.04c-0.42-0.13-0.66-0.58-0.53-1.01l2.93-9.47
				c1.62-5.26,5.46-9.5,10.54-11.63c4.17-1.75,7.51-5.17,9.18-9.37l4.22-10.64c0.17-0.41,0.63-0.61,1.05-0.45
				c0.41,0.16,0.62,0.63,0.45,1.05l-4.22,10.64c-1.83,4.6-5.49,8.34-10.06,10.26c-4.63,1.95-8.14,5.82-9.62,10.62l-2.93,9.47
				C349.66,299.22,349.34,299.44,348.99,299.44z"/>
			<g id="noseWhole">
				<path className={winCount >= 3 ? 'redFace' : ''} id="nose" fill="#D68139" d="M300.68,227.07l-6.92,9.74c-0.38,0.54-0.56,1.2-0.51,1.85l1.82,22.06c0.07,0.88-0.27,1.74-0.93,2.32
					l-9.08,8.11c-0.6,0.53-0.94,1.29-0.94,2.09v0.16c0,1.55,1.26,2.8,2.8,2.8h1.83c1.2,0,2.26,0.76,2.65,1.89l2.73,7.9
					c0.39,1.13,1.45,1.89,2.65,1.89h6.21c1.13,0,2.15-0.68,2.59-1.72l3.62-8.64c0.44-1.04,1.46-1.72,2.59-1.72h3.16
					c1.55,0,2.8-1.26,2.8-2.8l0,0c0-0.66-0.23-1.29-0.65-1.8l-4.18-5.02"/>
				<path fill="#A2694B" d="M302.98,288.71h-6.21c-1.54,0-2.91-0.98-3.41-2.43l-2.72-7.9c-0.28-0.81-1.04-1.35-1.89-1.35h-1.83
					c-1.99,0-3.61-1.62-3.61-3.61v-0.16c0-1.03,0.44-2.01,1.2-2.69l9.09-8.11c0.46-0.42,0.71-1.03,0.66-1.65l-1.82-22.07
					c-0.07-0.85,0.16-1.69,0.65-2.39l6.92-9.74c0.26-0.36,0.76-0.44,1.12-0.19c0.36,0.26,0.45,0.76,0.19,1.12l-6.92,9.74
					c-0.27,0.38-0.4,0.85-0.36,1.32l1.82,22.07c0.09,1.12-0.35,2.24-1.19,2.99l-9.09,8.11c-0.42,0.38-0.67,0.92-0.67,1.49v0.16
					c0,1.1,0.9,2,2,2h1.83c1.54,0,2.91,0.98,3.41,2.43l2.72,7.9c0.28,0.81,1.04,1.35,1.89,1.35h6.21c0.81,0,1.53-0.48,1.84-1.23
					l3.62-8.65c0.56-1.35,1.87-2.22,3.33-2.22h3.16c1.1,0,2-0.9,2-2c0-0.47-0.16-0.92-0.46-1.28l-4.18-5.02
					c-0.29-0.34-0.24-0.85,0.1-1.13c0.34-0.29,0.85-0.24,1.13,0.1l4.18,5.02c0.54,0.65,0.84,1.47,0.84,2.31
					c0,1.99-1.62,3.61-3.61,3.61h-3.16c-0.81,0-1.53,0.48-1.84,1.23l-3.62,8.65C305.75,287.84,304.44,288.71,302.98,288.71z"/>
			</g>
			<path fill="#A2694B" d="M354.36,198.52c-0.06,0-0.13-0.01-0.19-0.02l-23.03-5.56c-4.73-1.14-9.78-0.26-13.85,2.41
				c-3.15,2.07-6.81,3.17-10.59,3.17h-13.61c-3.44,0-6.82-0.92-9.78-2.67l-1.9-1.12c-3.93-2.32-8.55-3.03-13.01-1.98l-24.46,5.75
				c-0.44,0.12-0.87-0.17-0.97-0.6c-0.1-0.43,0.17-0.87,0.6-0.97l24.46-5.75c4.86-1.15,9.9-0.38,14.19,2.16l1.9,1.12
				c2.71,1.6,5.82,2.45,8.97,2.45h13.61c3.46,0,6.81-1.01,9.71-2.91c4.44-2.92,9.95-3.88,15.11-2.63l23.03,5.56
				c0.43,0.11,0.7,0.54,0.59,0.97C355.05,198.27,354.72,198.52,354.36,198.52z"/>
			<path fill="#A2694B" d="M339.18,184.31c-0.06,0-0.13-0.01-0.19-0.02l-16.71-4.03c-3.38-0.82-6.97-0.19-9.87,1.72
				c-2.32,1.53-5.02,2.34-7.8,2.34h-9.87c-2.53,0-5.03-0.68-7.21-1.97l-1.38-0.81c-2.81-1.66-6.1-2.16-9.27-1.41l-17.74,4.17
				c-0.44,0.12-0.87-0.17-0.97-0.6c-0.1-0.43,0.17-0.87,0.6-0.97l17.74-4.17c3.57-0.84,7.29-0.28,10.46,1.59l1.38,0.81
				c1.94,1.14,4.15,1.74,6.39,1.74h9.87c2.47,0,4.86-0.72,6.92-2.07c3.27-2.15,7.33-2.86,11.14-1.94l16.71,4.03
				c0.43,0.11,0.7,0.54,0.59,0.97C339.87,184.06,339.54,184.31,339.18,184.31z"/>
			<path fill="#A2694B" d="M300.7,327.04c-8.84,0-15.78-3.5-15.88-3.56c-0.39-0.2-0.55-0.69-0.35-1.09c0.2-0.39,0.69-0.55,1.09-0.35
				c0.15,0.07,15.02,7.57,28.57,0.01c0.39-0.22,0.88-0.08,1.1,0.31c0.22,0.39,0.08,0.88-0.31,1.1
				C310.11,326.15,305.16,327.04,300.7,327.04z"/>
			<path fill="#1C0404" d="M273.94,278.92h-30.77c-10.07,0-18.26-8.19-18.26-18.26c0-10.07,8.19-18.26,18.26-18.26h30.77
				c10.07,0,18.26,8.19,18.26,18.26C292.2,270.73,284.01,278.92,273.94,278.92z M243.17,244.01c-9.18,0-16.65,7.47-16.65,16.65
				c0,9.18,7.47,16.65,16.65,16.65h30.77c9.18,0,16.65-7.47,16.65-16.65c0-9.18-7.47-16.65-16.65-16.65H243.17z"/>
			<path fill="#1C0404" d="M359.91,278.92h-30.77c-10.07,0-18.26-8.19-18.26-18.26c0-10.07,8.19-18.26,18.26-18.26h30.77
				c10.07,0,18.26,8.19,18.26,18.26C378.17,270.73,369.98,278.92,359.91,278.92z M329.14,244.01c-9.18,0-16.65,7.47-16.65,16.65
				c0,9.18,7.47,16.65,16.65,16.65h30.77c9.18,0,16.65-7.47,16.65-16.65c0-9.18-7.47-16.65-16.65-16.65H329.14z"/>
			<rect x="291.4" y="256.77" fill="#1C0404" width="20.29" height="1.61"/>
			<polygon fill="#1C0404" points="381.69,253.71 375.52,253.71 375.52,252.1 380.06,252.1 379.8,229.64 381.41,229.62 			"/>
			<polygon fill="#1C0404" points="227.56,253.71 220.02,253.71 220.02,231.24 221.64,231.24 221.64,252.1 227.56,252.1 			"/>
			<g>
				
					<rect x="106.32" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 442.0572 83.2982)" fill="#D7DDB6" width="28.31" height="28.31"/>
				
					<rect x="146.36" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 453.7852 54.9843)" fill="#54381E" width="28.31" height="28.31"/>
				
					<rect x="186.41" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 465.5132 26.6703)" fill="#D7DDB6" width="28.31" height="28.31"/>
				
					<rect x="226.45" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 477.2412 -1.6437)" fill="#54381E" width="28.31" height="28.31"/>
				
					<rect x="266.49" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 488.9691 -29.9577)" fill="#D7DDB6" width="28.31" height="28.31"/>
				
					<rect x="306.53" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 500.6973 -58.2716)" fill="#54381E" width="28.31" height="28.31"/>
				
					<rect x="346.57" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 512.4254 -86.5856)" fill="#D7DDB6" width="28.31" height="28.31"/>
				
					<rect x="386.62" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 524.1534 -114.8996)" fill="#54381E" width="28.31" height="28.31"/>
				
					<rect x="426.66" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 535.8814 -143.2135)" fill="#D7DDB6" width="28.31" height="28.31"/>
				
					<rect x="466.7" y="561.1" transform="matrix(0.7071 0.7071 -0.7071 0.7071 547.6091 -171.5275)" fill="#54381E" width="28.31" height="28.31"/>
			</g>
			<g>
				<polygon fill="#54381E" points="224.57,425.03 199.47,457.06 276.06,525.28 300.67,476.28 				"/>
				<polygon fill="#54381E" points="376.27,425.03 401.37,457.06 326.4,525.28 300.17,476.28 				"/>
			</g>
			<path fill="#D7DDB6" d="M278.27,573.74"/>
			<path fill="#54381E" d="M499.45,535.48h-394.6c-0.89,0-1.61-0.72-1.61-1.61c0-0.89,0.72-1.61,1.61-1.61h394.6
				c0.89,0,1.61,0.72,1.61,1.61C501.06,534.76,500.34,535.48,499.45,535.48z"/>
			<g className={result === 'You lose!' ? 'happyTongue' : ''} id="tongue">
				<path fill="#BF3334" d="M288,316.11c1.8-1.1,5.69-3.14,10.89-3.11c2.71,0.01,8.02,0.04,10.56,3.44c1.74,2.34,0.65,6.87-1.53,15.92
					c-0.88,3.66-1.72,6.2-3.91,8.52c-1.47,1.56-3.05,2.49-4.15,3.02c-1.37-0.36-3.47-1.12-5.41-2.83c-1.97-1.73-3.27-3.99-4.53-8.54
					C288.92,328.97,287.79,323.38,288,316.11z"/>
				<path fill="#BF3334" stroke="#231F20" stroke-miterlimit="10" d="M299.51,313c0,0-3.35,13.14,0.46,15.45"/>
			</g>
		</g>
	</g>
</g>
<g className={opponentChoice === 'rock' ? 'raiseRock' : 'hiddenHand'} id="rock">
	<path fill="#D6DBB4" d="M549.66,622.6h-32.49c-8.35,0-15.18-6.83-15.18-15.18V443.78c0-8.35,6.83-15.18,15.18-15.18h32.49
		c8.35,0,15.18,6.83,15.18,15.18v163.63C564.84,615.76,558.01,622.6,549.66,622.6z"/>
	<path fill="#D68037" d="M550.84,428.5h-35.56c-6.6,0-12-4.51-12-10.03c0-10.7,0-21.41,0-32.11c0-0.15,0-0.3,0-0.45
		c0-1.08,0-2.17,0-3.25c0-0.68,0.1-4.22,3.53-7.08c2.17-1.82,5.17-2.95,8.47-2.95h35.56c6.6,0,12,4.51,12,10.03v35.81
		C562.84,423.99,557.44,428.5,550.84,428.5z"/>
	<path fill="#D68037" d="M504.09,422.05c-28.3-15.62-0.81-31.72-0.81-31.72"/>
	<path fill="#A16A4C" d="M521.1,372.63c0,0,7.04,10.52-0.52,19.19"/>
	<path fill="#A16A4C" d="M503.92,390.33c0,0,8.64,5.61-0.64,10.23"/>
	<path fill="#A16A4C" d="M531.35,372.63c0,0,7.04,10.52-0.52,19.19"/>
	<path fill="#A16A4C" d="M542.57,372.63c0,0,7.04,10.52-0.52,19.19"/>
	<path fill="#A16A4C" d="M551.8,372.07c0,0,7.04,10.52-0.52,19.19"/>
</g>
<g className={opponentChoice === 'paper' ? 'raisePaper' : 'hiddenHand'} id="paper">
	<path fill="#D6DBB4" d="M549.42,623.15h-32.49c-8.35,0-15.18-6.83-15.18-15.18V444.34c0-8.35,6.83-15.18,15.18-15.18h32.49
		c8.35,0,15.18,6.83,15.18,15.18v163.63C564.6,616.32,557.77,623.15,549.42,623.15z"/>
	<path fill="#D68037" d="M550.6,429.06h-35.56c-4.69-1.32-10.83-3.81-11.86-8.51c-0.04-0.17-0.07-0.33-0.09-0.49
		c-0.07-0.53-0.06-0.92-0.05-1.04c0.58-21.05-2.72-26.03-2.72-26.03c-2.89-4.36-5.75-3.13-7.78-7.78
		c-1.86-4.27-1.56-10.17,1.11-11.56c0.79-0.41,2.19-0.62,5.78,1.33c3.15,1.72,8.44,5.35,13.11,13.11
		c2.42-16.39,1.73-28.42,0.46-36.75c-0.66-4.36-2.28-13.03,1.54-15.47c1.29-0.83,3.22-0.94,4.53-0.12c3.21,2.01,1.26,8.7,1.24,15.9
		c-0.03,13.12,6.37,24.77,8.44,24.44c2.26-0.36,2.46-15.42,2.67-31.33c0.14-10.99-0.18-19.77,3.56-21.11c1.82-0.66,3.8,0.74,4,0.89
		c4.54,3.3,2.13,12.68,1.11,22.89c-0.66,6.62-0.98,15.97,0.67,27.56c2.6-9.76,3.6-17.88,4-23.78c0.57-8.3,0.25-16.29,3.78-17.56
		c1.23-0.44,2.66,0.03,3.55,0.67c2.73,1.97,2.14,6.66,0.9,17.99c-1.5,13.66-2.05,19.82,1.33,23.11c0.5,0.49,1.27,1.21,2.22,1.14
		c2.37-0.19,2.92-5.19,7.41-11.97c2.74-4.14,3.95-4.41,4.6-4.27c1.15,0.24,1.67,2.06,1.78,2.44c1.22,4.32-2.55,8.54-4.67,12.22
		c-2.11,3.68-4.16,9.61-3.06,19.11c0,8.31,0,16.61,0,24.92C562.6,424.54,557.2,429.06,550.6,429.06z"/>
	<path fill="#A16A4C" d="M501.82,388.14c0,0-2.96,10.03,7.12,6.72"/>
	<path fill="#A16A4C" d="M527.99,376.82c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#A16A4C" d="M540.66,376.28c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#A16A4C" d="M552.44,376.82c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#ECC8A9" d="M513.07,340.48c0,0,3.63-9.78,7.19,0"/>
	<path fill="#ECC8A9" d="M532.96,328.76c0,0,3.63-9.78,7.19,0"/>
	<path fill="#ECC8A9" d="M546.24,338.31c0,0,3.33-9.78,6.59,0"/>
	<path fill="#ECC8A9" d="M564.76,364.74c0,0,5.53-9.33,5.28,1.5"/>
	<path fill="#ECC8A9" d="M493.11,376.28c0,0-2.33,8.39,0.89,9.06l4.33-4.53"/>
</g>
<g className={opponentChoice === 'scissors' ? 'raiseScissors' : 'hiddenHand'} id="scissors">
	<path fill="#D6DBB4" d="M549.42,623.07h-32.49c-8.35,0-15.18-6.83-15.18-15.18V444.26c0-8.35,6.83-15.18,15.18-15.18h32.49
		c8.35,0,15.18,6.83,15.18,15.18v163.63C564.6,616.24,557.77,623.07,549.42,623.07z"/>
	<path fill="#D68037" d="M550.6,428.98h-35.56c-4.69-1.32-10.83-3.81-11.86-8.51c-0.04-0.17-0.07-0.33-0.09-0.49
		c-0.07-0.53-0.06-0.92-0.05-1.04c0.12-4.32-2.72-26.03-2.72-26.03c-1.18-9.01-0.82-10.31,0-11.48c3.21-4.54,11.91-4.76,13.29-2.39
		c0.35,0.6,0.07,1.08-0.78,6.95c-0.12,0.86-0.22,1.57-0.29,2.03c2.42-16.39,1.73-28.42,0.46-36.75c-0.66-4.36-2.28-13.03,1.54-15.47
		c1.29-0.83,3.22-0.94,4.53-0.12c3.21,2.01,1.26,8.7,1.24,15.9c-0.03,13.12,6.37,24.77,8.44,24.44c2.26-0.36,2.46-15.42,2.67-31.33
		c0.14-10.99-0.18-19.77,3.56-21.11c1.82-0.66,3.8,0.74,4,0.89c4.54,3.3,2.13,12.68,1.11,22.89c-0.66,6.62-0.98,15.97,0.67,27.56
		c0.08-0.9,0.3-2.24,0.94-3.74c0.65-1.52,1.66-3.88,3.73-4.4c1.09-0.28,2.11,0.05,3.33,0.44c1.37,0.44,2.1,0.68,2.67,1.33
		c1.42,1.66-0.19,3.75,1.33,6.22c0.11,0.18,1.03,1.64,1.86,1.48c0.5-0.1,0.68-0.72,1.48-2.59c0.78-1.85,1.18-2.78,1.56-3.11
		c1.18-1.06,3.48-1.2,4.67-0.22c1.56,1.28,0.96,4.3,0.67,6c-0.66,3.9-1.16,9.63-0.4,17.7c0,8.31,0,16.61,0,24.92
		C562.6,424.46,557.2,428.98,550.6,428.98z"/>
	<path fill="#A16A4C" d="M513.56,379.28c0,0-8.98,6.59,0.66,12.02"/>
	<path fill="#A16A4C" d="M527.99,376.74c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#A16A4C" d="M540.66,376.2c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#A16A4C" d="M552.44,376.74c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#ECC8A9" d="M513.07,340.4c0,0,3.63-9.78,7.19,0"/>
	<path fill="#ECC8A9" d="M532.96,328.68c0,0,3.63-9.78,7.19,0"/>
</g>
<g className={winCount === 5 ? 'raiseMiddleFinger' : 'hiddenHand'} id="middleFinger">
	{/* <path fill="#D6DBB4" d="M549.8,622.98h-32.49c-8.35,0-15.18-6.83-15.18-15.18V444.17c0-8.35,6.83-15.18,15.18-15.18h32.49
		c8.35,0,15.18,6.83,15.18,15.18V607.8C564.98,616.15,558.15,622.98,549.8,622.98z"/>
	<path fill="#D68037" d="M550.98,428.89h-35.56c-4.69-1.32-10.83-3.81-11.86-8.51c-0.04-0.17-0.07-0.33-0.09-0.49
		c-0.07-0.53-0.06-0.92-0.05-1.04c0.12-4.32-2.72-26.03-2.72-26.03c-1.18-9.01-0.82-10.31,0-11.48c3.21-4.54,11.91-4.76,13.29-2.39
		c0.35,0.6,0.07,1.08-0.78,6.95c-0.22,1.51-0.22,2.03-0.29,2.03c-0.21-0.01-0.88-5.4,1.21-10.62c0.61-1.53,0.96-2.36,1.86-3.1
		c2.49-2.03,7.53-1.91,9.52,0.32c0.47,0.52,1.12,1.55,2.26,1.68c0,0,0.68,0.08,1.38-0.28c2.28-1.16,1.32-10.64,1.18-12.17
		c-0.23-2.43-0.01-7.92,0.44-18.89c0.81-19.6,3.62-21.07,4.6-21.39c1.83-0.6,3.72,0.7,4,0.89c4.63,3.17,3.05,12.06,2.18,22.95
		c-0.52,6.54-0.96,15.9-0.4,27.5c-0.05-0.52-0.15-2.2,0.94-3.74c0.71-1,1.59-1.47,2.09-1.72c0.58-0.3,2.3-1.07,4.44-0.59
		c2.02,0.45,3.19,1.78,3.72,2.37c1.19,1.35,1.88,3.09,2.1,3.63c0.16,0.39,0.54,1.4,0.57,1.39c0.04-0.01-0.96-1.72-0.35-2.84
		c0.41-0.76,1.4-0.95,2.04-1.07c0.27-0.05,2.52-0.46,4.04,0.93c0.8,0.73,1.01,1.59,1.37,3.26c0.78,3.63,1.17,5.45,1.23,6.42
		c0.38,5.82-0.36,11.08-0.36,11.08c0,8.31,0,16.61,0,24.92C562.98,424.38,557.58,428.89,550.98,428.89z"/>
	<path fill="#A16A4C" d="M513.94,379.19c0,0-8.98,6.59,0.66,12.02"/>
	<path fill="#A16A4C" d="M528.37,376.65c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#A16A4C" d="M541.04,376.11c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#A16A4C" d="M552.81,376.65c0,0,7.04,7.04-0.52,12.85"/>
	<path fill="#ECC8A9" d="M534.34,328.59c0,0,3.63-9.78,7.19,0"/> */}
	<path fill="#D6DBB4" d="M75.71,611.98h32.49c8.35,0,15.18-6.83,15.18-15.18V433.16c0-8.35-6.83-15.18-15.18-15.18H75.71
		c-8.35,0-15.18,6.83-15.18,15.18v163.63C60.53,605.15,67.36,611.98,75.71,611.98z"/>
	<path fill="#D68037" d="M74.53,417.89h35.56c4.69-1.32,10.83-3.81,11.86-8.51c0.04-0.17,0.07-0.33,0.09-0.49
		c0.07-0.53,0.06-0.92,0.05-1.04c-0.12-4.32,2.72-26.03,2.72-26.03c1.18-9.01,0.82-10.31,0-11.48c-3.21-4.54-11.91-4.76-13.29-2.39
		c-0.35,0.6-0.07,1.08,0.78,6.95c0.22,1.51,0.22,2.03,0.29,2.03c0.21-0.01,0.88-5.4-1.21-10.62c-0.61-1.53-0.96-2.36-1.86-3.1
		c-2.49-2.03-7.53-1.91-9.52,0.32c-0.47,0.52-1.12,1.55-2.26,1.68c0,0-0.68,0.08-1.38-0.28c-2.28-1.16-1.32-10.64-1.18-12.17
		c0.23-2.43,0.01-7.92-0.44-18.89c-0.81-19.6-3.62-21.07-4.6-21.39c-1.83-0.6-3.72,0.7-4,0.89c-4.63,3.17-3.05,12.06-2.18,22.95
		c0.52,6.54,0.96,15.9,0.4,27.5c0.05-0.52,0.15-2.2-0.94-3.74c-0.71-1-1.59-1.47-2.09-1.72c-0.58-0.3-2.3-1.07-4.44-0.59
		c-2.02,0.45-3.19,1.78-3.72,2.37c-1.19,1.35-1.88,3.09-2.1,3.63c-0.16,0.39-0.54,1.4-0.57,1.39c-0.04-0.01,0.96-1.72,0.35-2.84
		c-0.41-0.76-1.4-0.95-2.04-1.07c-0.27-0.05-2.52-0.46-4.04,0.93c-0.8,0.73-1.01,1.59-1.37,3.26c-0.78,3.63-1.17,5.45-1.23,6.42
		c-0.38,5.82,0.36,11.08,0.36,11.08c0,8.31,0,16.61,0,24.92C62.53,413.37,67.93,417.89,74.53,417.89z"/>
	<path fill="#A16A4C" d="M111.57,368.18c0,0,8.98,6.59-0.66,12.02"/>
	<path fill="#A16A4C" d="M97.14,365.65c0,0-7.04,7.04,0.52,12.85"/>
	<path fill="#A16A4C" d="M84.48,365.1c0,0-7.04,7.04,0.52,12.85"/>
	<path fill="#A16A4C" d="M72.7,365.65c0,0-7.04,7.04,0.52,12.85"/>
	<path fill="#ECC8A9" d="M91.17,317.59c0,0-3.63-9.78-7.19,0"/>
</g>
</svg>

    </div>
    </div>
    </>
  )
}

export default Oldman