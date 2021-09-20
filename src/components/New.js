import React from 'react'
import '../css/home.css'
import { useState } from 'react'

function New() {
	const [BGColor, setBGColor] = useState('bg_color1');

	// const [Color, setColor] = useState('color1');

	const [SliderImage, setSliderImage] = useState('img1.png')

	const changeColor_thumb1 = () => {
		setBGColor('bg_color1')
		setSliderImage('img1.png')
		// setColor('color1')
	}
	const changeColor_thumb2 = () => {
		setBGColor('bg_color2')
		setSliderImage('img2.png')
		// setColor('color2')
	}
	const changeColor_thumb3 = () => {
		setBGColor('bg_color3')
		setSliderImage('img3.png')
		// setColor('color3')
	}

	return (
		<div className="container">
			<div className={`circle ${BGColor}`} ></div>
			<div className="content">
				<div className="text_box">
					<h2>
					Our Coffee
					</h2>
					<p>
						Since 1971, it always has been and will always be about quality.
						We’re passionate about ethically sourcing only the finest Arabica
						coffee beans and roasting them with great care. Our passion for coffee
						is rivaled only by our love of sharing it.
					</p>
					<button className={`btn-def ${BGColor}`}>Learn more</button>
				</div>
				<div className="imageBox">
					<img src={`./images/${SliderImage}`} alt="" />
				</div>
				<div className="thumb">
					<li><img src="./images/thumb1.png" onClick={changeColor_thumb1} alt="" /></li>
					<li><img src="./images/thumb2.png" onClick={changeColor_thumb2} alt="" /></li>
					<li><img src="./images/thumb3.png" onClick={changeColor_thumb3} alt="" /></li>
				</div>
				<div className="socalMedia">
					<li><img src="./images/facebook.png" alt="" /></li>
					<li><img src="./images/instagram.png" alt="" /></li>
					<li><img src="./images/twitter.png" alt="" /></li>
				</div>
			</div>
		</div>
	)
}
export default New
