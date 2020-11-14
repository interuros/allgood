import React, {Component} from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../message/Message'

import './Form.scss';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {data: {}, messages: {}};
    }


    submitForm = (event) => {
        event.preventDefault();
        this.setState({messages: {}, errors: []});

        fetch("http://localhost:3000/user/" + this.props.type, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.data)
        })
        .then(response => response.text())
        .then(responseText => {
            let data = JSON.parse(responseText);

            if (data.success) {
                this.props.toggleForm("");
            } else {
                this.setState({errors: data.errors});
            }
        })
        .catch(err => {
            console.log(err);
        })


        
    }


    onChange = (event) => {
        let newData = {...this.state.data};
        newData[event.target.name] = event.target.value;

        this.setState({data: {...newData}})
    }
   

    removeMessage = (key) => {
        let messages = {...this.state.messages};
        messages[key] = false;
        this.setState({messages: {...messages}});
    }


    render() {

        const {type, popup} = this.props;
        
        const forms = {
            login: {
                fields: [
                    {name: "username", type: "email", placeholder: "Enter your e-mail", label: "Username", required: true},
                    {name: "password", type: "password",  placeholder: "Enter your password", label: "Password", required: true},
                ]
            },
            register: {
                fields: [
                    {name: "firstName", type: "text", placeholder: "Your first name", label: "First name", required: true},
                    {name: "lastName", type: "text", placeholder: "Your last name", label: "Last name", required: true},
                    {name: "job", type: "text", placeholder: "Your Job/Occupation", label: "Your Job/Occupation", required: false},
                    {name: "email", type: "email", placeholder: "Your e-mail address", label: "E-mail", required: true},
                    {name: "password", type: "password", placeholder: "Your password", label: "Password", required: true},
                    {name: "passwordRepeat", type: "password", placeholder: "Repeat your password", label: "Repeat password", required: true},
                ]
            }
        }


        const messages = this.state.errors;

        return (
            <div className={"form " + (popup ? "form--popup" : "")}>
                <form onSubmit={this.submitForm}>
                    {forms[type].fields.map(field => {
                        return(
                            <div className="form__input">
                                <label htmlFor={field.name}>{field.label } {field.required === true ? <span>*</span> : ""}</label>
                                <input required={field.required} onChange={this.onChange} type={field.type} name={field.name} id={field.name} placeholder={field.placeholder ? field.placeholder : ""}/>    
                            </div>
                        )
                    })}

                <button className="button button--red" type="submit">{type.capitalize()}</button>
                <div onClick={() => {this.props.toggleForm("")}} className="form__close">
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                </form>
                {messages ? messages.map((value, index) => {
                    return (this.state.messages[index] == false ? "" : (index == "0" || this.state.messages[index - 1] == false ? <Message data={value} index={index} remove={this.removeMessage}/> : ""))
                }) : ""}
            </div>
        )
    }
} 


export default Footer;