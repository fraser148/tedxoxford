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
				<Link to='/speaker'>SPEAKERS</Link>
				<Link to='/student-speaker-application'>APPLY</Link>
				<Link to='/sponsors'>SPONSORS</Link>
				<Link to='/committee'>COMMITTEE</Link>
				<Link to='/about'>ABOUT</Link>
				<a className='join-news' target="_blank" rel="noreferrer" href='https://tickets.tedxoxford.co.uk'>BUY TICKETS</a>
			</div>
		</div>
	)
};
export default Header;