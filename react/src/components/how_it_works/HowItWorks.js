import React, {Component} from 'react';
import './HowItWorks.scss';

/* icons */
import greenIcon from '../../assets/how_it_works-icon-green.png';
import blueIcon from '../../assets/how_it_works-icon-blue.png';
import yellowIcon from '../../assets/how_it_works-icon-yellow.png';
import purpleIcon from '../../assets/how_it_works-icon-purple.png';

/* lines */
import greenLine from '../../assets/how_it_works-line-green.png';
import blueLine from '../../assets/how_it_works-line-blue.png';
import yellowLine from '../../assets/how_it_works-line-yellow.png';
import arrowLine from '../../assets/how_it_works-arrow.png';

/* images */
import poster from "../../assets/video-poster.png";
import heart from "../../assets/how_it_works-heart.png";

class HowItWorks extends Component {

	render() {

		const items = [
			{icon: blueIcon, line: arrowLine, title: "Post an Item", class: "blue", text: "Rerister to post an item for sale."},
			{icon: yellowIcon, line: yellowLine, title: "Select and Ogranization", class: "yellow", text: "Rerister to post an item for sale."},
			{icon: greenIcon, line: greenLine, title: "Buyer Makes the Payment", class: "green", text: "Rerister to post an item for sale."},
			{icon: purpleIcon, line: blueLine, title: "Post an Item", class: "purple", text: "Rerister to post an item for sale."},
		]

		return (
			<section className="howitworks">
				<div className="howitworks__header section__header--divider">
					<h2 className="howitworks__header__title section-title">
						How it works
					</h2>
					<a href={void(0)} className="howitworks__header__link">Learn more about AllGood</a>
				</div>
				<div className="howitworks__steps">
					<div className="howitworks__steps__container">
						{items.map((value, index) => {
							return (
								<div key={index} className={"howitworks__steps__container__step howitworks__steps__container__step--" + value.class}>
									<div className="howitworks__steps__container__step__icon">
										<div className="howitworks__steps__container__step__icon__line">
											<img src={value.line} alt={index}/>
										</div>
										<div className="howitworks__steps__container__step__icon__container">
											<img src={value.icon} alt={index}/>
										</div>
									</div>
									<h3 className="howitworks__steps__container__step__title">
										{value.title}
									</h3>
									<p className="howitworks__steps__container__step__text">
										{value.text}
										<a href={void(0)}> Register now!</a>
									</p>
								</div>
							)
						})}
					</div>
				</div>
				<div className="howitworks__video">
					<div className="howitworks__video__poster">
						<a href="https://www.youtube.com/watch?v=2zb-_JC7Ir0" target="_blank">
							<img src={poster} alt=""/>
						</a>
					</div>
					<div className="howitworks__video__last">
						<div className="howitworks__video__last__container">
							<img src={heart} />
							<h3 className="howitworks__video__last__container__title">
								Donate
							</h3>
							<p className="howitworks__video__last__container__text">
								AllGood send the proceeds dorectly to the charity-campaign you choose to support
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
} 

export default HowItWorks;