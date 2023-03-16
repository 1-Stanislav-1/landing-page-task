import React, {useState} from 'react';

export default function Content() {

	const [carousel, setCarousel] = useState({
		position: 0,
		items: ['Source/Rectangle 2.jpg', 'Source/Rectangle 3.jpg', 'Source/Rectangle 4.jpg', 'Source/Rectangle 5.jpg', 'Source/Rectangle 5.jpg']
	});

	function feedbackClick() {
		const button = document.querySelector('.feedback');
		button.classList.remove('feedback_hidden');
	}

	function moveCarouselLeft() {
		let position = carousel.position;
		if (position > 0) position--; 
		setCarousel({...carousel, position});
	}

	function moveCarouselRight() {
		let position = carousel.position;
		if (position < carousel.items.length - 4) position++; 
		setCarousel({...carousel, position});
	}

	return <div className='content'>
		<div className='content_titleAndFeedback'>
			<h3 className='content__title'>Walking in Old Tallinn</h3>
			<button className='content__feedback' onClick={feedbackClick}>Feedback</button>
		</div>
		<div className="content__textContainer">
			<p className='content__p'>Welcome to Old Tallinn, the heart of the Estonian capital! The history of the settlement once began from here, and today it is one of the best preserved medieval cities in Europe.</p>
			<p className='content__p'>I will take you through the streets and doorways and show you where they traded, what they ate, what they sued about and what our Estonian ancestors aspired to.</p>
			<p className='content__p'>You will visit the oldest pharmacy, get acquainted with the royal privileges, see firsthand a real "gingerbread" house, look into an old tavern, walk along the widest and longest streets of the city and even find out that Tallinn is a lame city!</p>
			<p className='content__p'>And you will also find beautiful and interesting souvenirs, of course!</p>
		</div>
		<ul className='content__carousel' style={{left: `-${carousel.position * 345}px`}}>
			{carousel.items.map((item, i) => 
				<li className='content__carouselItem' key={i}>
					<img src={item}/>
				</li>)}
		</ul>
		<div className='content__carouselControls'>
			<button className={`content__buttonLeft ${carousel.position ? 'content__buttonLeft_default' : 'content__buttonLeft_disabled'}`} onClick={moveCarouselLeft}></button>
			<button className={`content__buttonRight ${carousel.position ? 'content__buttonRight_disabled' : 'content__buttonRight_default'}`} onClick={moveCarouselRight}></button>
		</div>
	</div>
}