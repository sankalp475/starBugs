import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
function Navbar() {
	return (
		<nav>
			<div className="container">
				<div className="brand">
					<div className="logo">
						<img src="./images/logo.png" alt="" />
					</div>
				</div>
				<div className="listItems">
					<ul data-ullist>
						<li>
							<Link to="/" style={{
								textDecoration: 'none', color: 'black',
								padding:'5px 10px'
							}} >Home</Link>
						</li>
						<li>
						    <Link to="/" style={{
								textDecoration: 'none', color: 'black',
								padding:'5px 10px'
							}} >Menu</Link>
						</li>
						<li>
						    <Link to="/New?" style={{
								textDecoration: 'none', color: 'black',
								padding:'5px 10px'
							}} >What's New</Link>
						</li>
						<li>
							<Link to="/contact" style={{
								textDecoration: 'none', color: 'black',
								padding:'5px 10px'
							}} >Contect</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
