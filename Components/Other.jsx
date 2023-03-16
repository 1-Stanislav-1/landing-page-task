import React, { useState } from 'react';

export default function Other() {

	const [carousel, setCarousel] = useState([
		{
			title: "St. Isaac's Cathedral in St. Petersberg",
			src: "Source/Photo1.jpg",
			text: "One of the highest domend structures in the world",
			like: false
		},
		{
			title: "The Bridge of Peace, Tbilisi",
			src: "Source/Photo2.jpg",
			text: "Arc-shaped pedestrian bridge made of glass and steel",
			like: false
		},
		{
			title: "El Caminito del Rey, Argentina",
			src: "Source/Photo3.jpg",
			text: "Tango, Open-air Museum, Painting, Art and History",
			like: false
		}
	]);

	function hideLike(event) {
		const like = document.querySelectorAll('.other__itemLike');
		like.forEach(item => {
			if (event.target.firstElementChild === item) item.classList.remove('other__itemLike_default');
		});
	}

	function showLike(event) {
		const like = document.querySelectorAll('.other__itemLike');
		like.forEach(item => {
			if (event.target.firstElementChild === item) item.classList.add('other__itemLike_default');
		});
	}

	function likeClick(event) {
		const like = document.querySelectorAll('.other__itemLike')
		let number;
		like.forEach((item, i) => {
			if (event.target === item) number = i;
		});
		const carouselTmp = carousel;
		carouselTmp[number].like = !carouselTmp[number].like;
		setCarousel([...carouselTmp]);
	}

	return <div className='other'>
		<h3 className='other__title'>Other tours</h3>
		<ul className='other__carousel'>
			{carousel.map((item, i) =>
				<li key={item.title} className='other_carouselItem'>
					<div className='other__imgContainer' style={{background: `url(${item.src})`}} onMouseOver={showLike} onMouseOut={hideLike}>
						<div className={`other__itemLike ${carousel[i].like ? 'other__itemLike_active' : ''}`} onClick={likeClick}></div>
					</div>
					<h4 className='other__itemTitle'>{item.title}</h4>
					<p className='other__itemText'>{item.text}</p>
				</li>
			)}
		</ul>
	</div>
}