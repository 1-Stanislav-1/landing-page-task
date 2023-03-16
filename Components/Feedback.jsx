import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

export default function Feedback() {
	const [trip] = useState(["Walking in Old Tallinn", "St. Isaac's Cathedral", "The Bridge of Peace", "El Caminito del Rey"]);
	const { register, getValues, formState: {errors}, handleSubmit } = useForm({mode: 'onBlur'});

	function closeActive() {
		const button = document.querySelector('.feedback__close');
		button.classList.add('feedback__close_active');
	}

	function close() {
		const button = document.querySelector('.feedback');
		button.classList.add('feedback_hidden');
	}

	function arrowClick() {
		const list = document.querySelector('.feedback__tripList'),
			arrow = document.querySelector('.feedback__listArrow'),
			tripField = document.querySelector('.feedback__trip');
		if (list.classList.contains('feedback__tripList_hidden')) {
			list.classList.remove('feedback__tripList_hidden');
			arrow.classList.add('feedback__listArrow_active');
			tripField.classList.add('feedback__trip_active');
		}
		else {
			list.classList.add('feedback__tripList_hidden');
			arrow.classList.remove('feedback__listArrow_active');
			tripField.classList.remove('feedback__trip_active');
		}
	}

	function tripItemSelect(event) {
		const tripField = document.querySelector('.feedback__trip'),
			tripArray = document.querySelectorAll('.feedback__tripItem'),
			placeholder = document.querySelector('.feedback__tripPlaceholder'),
			target = document.querySelector('.feedback__tripSelection'),
			arrow = document.querySelector('.feedback__listArrow'),
			success = document.querySelector('.feedback__tripSuccess');
		tripField.classList.remove('feedback__trip_active');
		tripField.classList.remove('feedback__trip_error');
		placeholder.classList.add('feedback__tripPlaceholder_hidden');
		arrow.classList.add('feedback__listArrow_hidden');
		target.classList.remove('feedback__tripSelection_hidden');
		success.classList.remove('feedback__tripSuccess_hidden');
		tripArray.forEach(item => {
			if (item === event.target) target.textContent = event.target.textContent;
		});
		arrowClick();
	}

	function check() {
		const checkbox = document.querySelector('.feedback__checkbox');
		checkbox.classList.toggle('feedback__checkbox_checked');
	}

	function chooseSubject(event) {
		const subjects = [...document.querySelectorAll('.feedback__subject div')];
		subjects.forEach(item => item.classList.remove('feedback__subject4_active'));
		subjects.find(item => item === event.target).classList.add('feedback__subject4_active');
	}

	function onSubmit() {
		const success = document.querySelector('.feedback__tripSuccess');
		const tripField = document.querySelector('.feedback__trip');
		if (success.classList.contains('feedback__tripSuccess_hidden')) tripField.classList.add('feedback__trip_error');
	}

	function onError() {
		const success = document.querySelector('.feedback__tripSuccess');
		const tripField = document.querySelector('.feedback__trip');
		if (success.classList.contains('feedback__tripSuccess_hidden')) tripField.classList.add('feedback__trip_error');
	}

	return <div className='feedback feedback_hidden'>
		<div className='feedback__window'>
			<h4 className='feedback__title'>Feedback</h4>
			<svg className="feedback__close" onMouseDown={closeActive} onMouseUp={close}>
				<path d="M13 13 L27 27 M27 13 L13 27" stroke="#EAEAEA"/>
			</svg>
			<form className='feedback__form' onSubmit={handleSubmit(onSubmit, onError)}>
				<div className='feedback__nameContainer'>
					<label>
						Your name
						<input className={`feedback__name ${errors?.name && 'feedback__name_error'}`} placeholder="Placeholder" {...register('name', {required: true})}/>
					</label>
					{errors?.name && <div className="feedback__nameError"></div>}
					{!errors?.name && getValues('name') && <div className="feedback__nameSuccess"></div>}
				</div>
				<div className='feedback__emailContainer'>
					<label>
						Email address
						<input className={`feedback__email ${errors?.email && 'feedback__email_error'}`} placeholder="Placeholder" {...register('email', {required: true})}/>
					</label>
					{errors?.email && <div className="feedback__emailError"></div>}
					{!errors?.email && getValues('email') && <div className="feedback__emailSuccess"></div>}
				</div>
				<div className='feedback__block2'>
					<div className='feedback__phoneContainer'>
						<label>
							Your phone
							<input className={`feedback__phone ${errors?.phone && 'feedback__phone_error'}`} placeholder="Placeholder" {...register('phone', {required: true})}/>
						</label>
						{errors?.phone && <div className="feedback__phoneError"></div>}
						{!errors?.phone && getValues('phone') && <div className="feedback__phoneSuccess"></div>}
					</div>
					<div className='feedback__tripContainer'>
						<p className='feedback__label'>Chose a trip</p>
						<div className='feedback__trip' onClick={arrowClick}>
							<p className='feedback__tripPlaceholder'>Choose</p>
							<p className={`feedback__tripSelection feedback__tripSelection_hidden`}></p>
							<svg className='feedback__listArrow'>
								<circle cx="32" cy="32" r="16" fill="none" stroke="#EAEAEA" />
								<path d="M26 29 L32 35 L38 29" fill="none" stroke="#EAEAEA" />
							</svg>
							<div className="feedback__tripSuccess feedback__tripSuccess_hidden"></div>
						</div>
						<ul className="feedback__tripList feedback__tripList_hidden">
							{trip.map(item =>
								<li key={item} className='feedback__tripItem' onClick={tripItemSelect}>{item}</li>
							)}
						</ul>
					</div>
				</div>
				<div className="feedback__subject" onClick={chooseSubject}>
					<div className="feedback__subject1 feedback__subject4_active">Reviews and suggestions</div>
					<div className="feedback__subject2">Question about content</div>
					<div className="feedback__subject3">Complaints</div>
					<div className="feedback__subject4">Other</div>
				</div>
				<div className="feedback__questionContainer">
					<label>
						Describe your question
						<textarea className={`feedback__question ${errors?.question && 'feedback__question_error'}`} placeholder="Placeholder" {...register('question', {required: true})}></textarea>
					</label>
				</div>
				<div className="feedback__checkboxContainer">
					<div className="feedback__checkbox" onClick={check}></div>
					<p className="feedback__description">Даю согласие на обработку</p>
				</div>
				<input className="feedback__send" type="submit" value="Send"/>
			</form>
		</div>
	</div>
}