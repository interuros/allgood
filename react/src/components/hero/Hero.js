import React, {Component} from 'react';
import { faMobileAlt, faHeartbeat, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Hero.scss';
import desktopImg from '../../assets/header_img.png'
import mobileImg from '../../assets/header_img-mobile.png'

class Navigation extends Component {

	constructor() {
		super();
		this.state = {};
	}

	changeImg = () => {
		this.setState({
			img: this.props.mobile === true ? mobileImg : desktopImg
		})
	}
    
	componentDidMount() {
		this.changeImg();
		window.addEventListener("resize", this.changeImg);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.changeImg);
	}

	render() {

		const items = [
			{icon: faHandHoldingUsd, text: "Turn your stuff into cash donations", class: "green"},
			{icon: faMobileAlt, text: "Shop allgood.markets - and support a charity", class: "purple"},
			{icon: faHeartbeat, text: "A new way to fundraise", class: "red"},
		]

		return (
			<header className="hero">
				<div className="hero__container">
					<div className="hero__container__features">
						{items.map((value, index) => {
							return (
								<div className={"hero__container__features__item hero__container__features__item--" + value.class}>
									<div className="hero__container__features__item__icon">
										<FontAwesomeIcon icon={value.icon}/>
									</div>
									<p className="hero__container__features__item__text">
										{ value.text }
									</p>
								</div>
							)
						})}							
					</div>
					<div className="hero__container__img">
						<img src={this.state.img} alt=""/>
					</div>
				</div>
				<div className="hero__curve">
					<svg data-v-9d9a21ac="" viewBox="0 0 500 150" preserveAspectRatio="none">
						<path data-v-9d9a21ac="" d="M0.23,16.07 C238.94,151.28 238.37,149.30 503.61,20.02 L500.00,150.00 L0.00,150.00 Z"></path>
					</svg>  
				</div>
			</header>
		)
	}
} 

export default Navigation;