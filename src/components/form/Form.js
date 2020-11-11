import React, {Component} from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Form.scss';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

class Footer extends Component {

    constructor(props) {
        super(props);
    }


   


    render() {

        const {type, popup} = this.props;
        
        const forms = {
            login: {
                fields: [
                    {name: "username", type: "email", placeholder: "Enter your e-mail", label: "Username"},
                    {name: "password", type: "password",  placeholder: "Enter your password", label: "Password"},
                ]
            },
            register: {
                fields: [
                    {name: "name", type: "text", placeholder: "Your first name", label: "First name"},
                    {name: "lastName", type: "text", placeholder: "Your last name", label: "Last name"},
                    {name: "job", type: "text", placeholder: "Your Job/Occupation", label: "Your Job/Occupation"},
                    {name: "email", type: "email", placeholder: "Your e-mail address", label: "E-mail"},
                    {name: "password", type: "password", placeholder: "Your password", label: "Password"},
                    {name: "passwordRepeat", type: "password", placeholder: "Repeat your password", label: "Repeat password"},
                ]
            }
        }

        return (
            <div className={"form " + (popup ? "form--popup" : "")}>
                <form onSubmit="">
                    {forms[type].fields.map(field => {
                        return(
                            <div className="form__input">
                                <label htmlFor={field.name}>{field.label}</label>
                                <input type={field.type} name={field.name} id={field.name} placeholder={field.placeholder ? field.placeholder : ""}/>    
                            </div>
                        )
                    })}

                <button className="button button--red" type="submit">{type.capitalize()}</button>
                <div onClick={() => {this.props.toggleForm("")}} className="form__close">
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
                </form>
            </div>
        )
    }
} 


export default Footer;