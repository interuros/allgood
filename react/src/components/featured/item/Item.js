import React, {Component} from 'react'
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Item.scss';

class Item extends Component {

	render() {

		const {image, name, shortDesc, vendor, price} = this.props.data;

		return (
			<div className="featureditem">
				<div className="featureditem__img">
					<img src={image} alt=""/>
				</div>
				<div className="featureditem__content">
					<h3 className="featureditem__content__name">
						{name}
					</h3>
					<p className="featureditem__content__vendor">
						{vendor}
					</p>
					<p className="featureditem__content__shortdesc">
						{shortDesc}
					</p>
					<h3 className="featureditem__content__price">
						${price}
					</h3>
				</div>
				<a href={void(0)} className="featureditem__link">
						<FontAwesomeIcon icon={faHandHoldingUsd}/>
						<span>Sick Kids</span>
				</a>
			</div>
		)
	}
} 

export default Item;