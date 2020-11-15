import React, {Component} from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Message.scss';

class Message extends Component {
 
	constructor(props) {

		super(props);
		this.state = {};
	}

	render() {

		const {data, index} = this.props;

		return (
			<div id={"flash-message-" + index} className="flash-message">
				<p>{data.text}</p>
				<div onClick={() => {this.props.remove(index)}} className="flash-message__close">
					<FontAwesomeIcon icon={faTimes}/>
				</div>
			</div>
		)
	}
} 

export default Message;