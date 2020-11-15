import React, { Component } from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navigation.scss'
import desktopLogo from '../../assets/logo.png'
import mobileLogo from '../../assets/logo-mobile.png'

/* components */
import Buttons from '../buttons/Buttons'
import Account from './account/Account'

class Navigation extends Component {

	constructor(props) {
		
		super(props);
		this.state = {};
	}

	changeLogo = () => this.setState({logo: this.props.mobile === true ? mobileLogo : desktopLogo});
    
	componentDidMount() {

		this.changeLogo();
		window.addEventListener("resize", this.changeLogo);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.changeLogo);
	}

	render() {
		return (
			<nav className="navigation" id="navigation">
				<div className="navigation__logo">
					<a href={void(0)}>                   
						<img src={this.state.logo} alt="logo"/>
					</a>
				</div>
				<div className="navigation__form">
					{ this.props.mobile === true ? 
						<form action="">
							<input name="location" type="text" placeholder="Search or post..."/>
							<button>
								<FontAwesomeIcon icon={faSearch} />
							</button>
						</form> : 
						<form action="">
							<input name="location" type="text" placeholder="Location"/>
							<input name="category" type="text" placeholder="Category"/>
							<input name="charity" type="text"  placeholder="Charity"/>
							<button>
								<FontAwesomeIcon icon={faSearch} />
							</button>
						</form>
					}
				</div>
				<div className="navigation__links">
					<ul className="navigation__links__list">
						<li className="navigation__links__list__item navigation__links__list__item--active">
							<a href={void(0)}>Search items</a>
						</li>
						<li className="navigation__links__list__item">
							<a href={void(0)}>Post items</a>
						</li>
					</ul>
					<div className="navigation__links__account">
						{this.props.isLoggedIn === false && !this.props.user ? <Buttons toggleForm={this.props.toggleForm} /> : <Account setUser={this.props.setUser} setLoggedIn={this.props.setLoggedIn} user={this.props.user}/>}
					</div> 
				</div>			
			</nav>
		)
	}
} 

export default Navigation;