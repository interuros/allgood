import React, {Component} from 'react';
import './CallToAction.scss';

class CallToAction extends Component {

	render() {

		return (
			<section className="cta">
				<div className="cta__container">
					<div className="cta__container__circle">
						<div className="cta__container__circle__inner"></div>
					</div>
					<div className="cta__container__content">
						<h2 className="cta__container__content__title">
							Are you a Charity or Organization looking to Fundraise?
						</h2>
						<p className="cta__container__content__text">
							Want to register with AllGood.market so people can donate the proceeds of their sales to you? Please contact us at info@allgood.market or complete out online form.
						</p>
						<div className="cta__container__content__btn">
							<a href={void(0)} className="button button--red">
								Sing up charity/campaign
							</a>
						</div>
					</div>
				</div>
			</section>
		)
	}
} 

export default CallToAction;