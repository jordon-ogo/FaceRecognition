import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import earth from './earth.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"><img alt='Logo' style={{paddingTop: '5px'}}src={earth}/></div>
			</Tilt>
		</div>
	);
}

export default Logo