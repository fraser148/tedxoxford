import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/TEDxOxford - Logo.png';
import { slide as Menu} from 'react-burger-menu';

class Header extends React.Component {
	render () {
		return (
			<div className="navbar">
				
				<div className="logo">
					<Link to='/'><img src={logo} alt='Logo' /></Link>
				</div>
				<Menu className="bg-styling">
					<Link to='/talks'>TALKS</Link>
					<Link to='/speaker'>SPEAKERS</Link>
					<Link to='/student-speaker-application'>APPLY</Link>
					<Link to='/sponsors'>SPONSORS</Link>
					<Link to='/committee'>COMMITTEE</Link>
					<Link to='/about'>ABOUT</Link>
					<a className='join-news' target="_blank" rel="noreferrer" href='https://tickets.tedxoxford.co.uk'>BUY TICKETS</a>
				</Menu>
				<div className="links">
					<Link to='/talks'>TALKS</Link>
					<Link to='/speaker'>SPEAKERS</Link>
					<Link to='/faq'>FAQ</Link>
					{/* <div class="dropdown">
					<a class="dropbtn">CONFERENCE</a>
						<div class="dropdown-content">
							<a href="#">Link 1</a> 	
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
					</div> */}
					{/* <Link to='/student-speaker-application'>APPLY</Link> */}
					<Link to='/sponsors'>SPONSORS</Link>
					<Link to='/committee'>COMMITTEE</Link>
					<Link to='/about'>ABOUT</Link>
					<a className='join-news' target="_blank" rel="noreferrer" href='https://tickets.tedxoxford.co.uk'>BUY TICKETS</a>
				</div>
				
			</div>
		)
	}
};
export default Header;