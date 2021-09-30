import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/TEDxOxford - Logo.png';

const Header = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<Link to='/'><img src={logo} alt='Logo' /></Link>
			</div>
			<div className="links">
				<Link to='/talks'>TALKS</Link>
				<Link to='/speakers'>SPEAKERS</Link>
				<Link to='/sponsors'>SPONSORS</Link>
				<Link to='/committee'>COMMITTEE</Link>
				<Link to='/about'>ABOUT</Link>
				
				<Link className='join-news' to='/newsletter'>JOIN OUR NEWSLETTER</Link>
			</div>
		</div>
	)
};
export default Header;