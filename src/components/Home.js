import React from 'react'
import '../css/home.css'
import { useState } from 'react'
function Home() {
	const [BGColor, setBGColor] = useState('bg_color1');

	const [Color, setColor] = useState('color1');

	const [SliderImage, setSliderImage] = useState('img1.png')

	const changeColor_thumb1 = () => {
		setBGColor('bg_color1')
		setSliderImage('img1.png')
		setColor('color1')
	}
	const changeColor_thumb2 = () => {
		setBGColor('bg_color2')
		setSliderImage('img2.png')
		setColor('color2')
	}
	const changeColor_thumb3 = () => {
		setBGColor('bg_color3')
		setSliderImage('img3.png')
		setColor('color3')
	}

	return (
		<div className="container">
			<div className={`circle ${BGColor}`} ></div>
			<div className="content">
				<div className="text_box">
					<h2>
						it's not just coffee <br />
						it's <strong className={`${Color}`}>Starbucks</strong>
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Rem est impedit et sequi mollitia possimus, quos nulla
						delectus libero unde optio nesciunt hic quisquam asperiores
						temporibus quae in ducimus esse. Dolorem recusandae inventore
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

export default Home
