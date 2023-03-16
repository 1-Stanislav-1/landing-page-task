import React, {useEffect} from 'react';
import Content from './Content.jsx';
import Other from './Other.jsx';
import Feedback from './Feedback.jsx';

export default function App() {

	useEffect(() => {
		const button = document.querySelector('.feedback__close');
		document.addEventListener('mouseup', () => button.classList.remove('feedback__close_active'));
	}, []);

	return <div className="app">
		<img className="app__banner" src="Source/Banner.jpg"/>
		<Content/>
		<Other/>
		<Feedback/>
	</div>
}