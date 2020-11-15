import React, {Component} from 'react';
import './Post.scss';
import img from "../../assets/post-img.png";

/* cmponents */
import Buttons from '../buttons/Buttons'

class Post extends Component {

	render() {

		return (
			<section className="post section--blue">
				<div className="post__img">
					<img src={img} alt=""/>
				</div>
				<div className="post__content">
					<h2 className="post__content__title">
						Post an Item for sale
					</h2>
					<p className="post__content__text">
						To post an item for sale - please register
						or sign in ig you are already registered with allgodd
					</p>
					<Buttons toggleForm={this.props.toggleForm}/>
				</div>
			</section>
		)
	}
} 

export default Post;