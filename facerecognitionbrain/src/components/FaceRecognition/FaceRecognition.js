import React from 'react';
import './FaceRecognition.css';
/*
const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={imageUrl} width='700px' height='auto' />
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

				</div>
			</div>
		</div>
	);
}*/

const FaceRecognition = ({imageUrl, box}) => {
 
 
 const faces = box.map((face, i) => {return <div key={i} className='bounding-box' style={{top: face.topRow, left:face.leftCol, bottom: face.bottomRow, right:face.rightCol}}></div>})
	 return (
		 <div className='center ma'>
			 <div className='absolute mt2'>
				 <img id='inputimage' alt='' src={imageUrl} width='700px' height='auto' />
				 {faces}
			 </div>
		 </div>
	 )
	}

export default FaceRecognition
