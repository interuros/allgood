import React, { Component } from 'react'
import accImg from '../../../assets/account_default.jpg'
import { faEnvelope, faBell, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    logOut = () => {
        this.props.setLoggedIn(false);
        this.props.setUser(false);
        localStorage.removeItem('token');
    }

    render() {

        const {user} = this.props;

        return (
            <div className="navigation__links__account__in">
                <a href={void(0)} className="navigation__links__account__in__icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href={void(0)} className="navigation__links__account__in__icon navigation__links__account__in__icon--alert">
                    <FontAwesomeIcon className="" icon={faBell} />
                    <span>2</span>
                </a>
                
                <div className="navigation__links__account__in__profile">
                    <img className="navigation__links__account__in__profile__thumb" src={accImg} alt=""/>
                    
                    <a className="navigation__links__account__in__profile__arrow">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </a>
                    <ul className="navigation__links__account__in__profile__dropdown">
                        <li className="navigation__links__account__in__profile__dropdown__item">
                            <p>Signed in as {user.email}</p>
                        </li>
                        <li className="navigation__links__account__in__profile__dropdown__item">
                            <p>{`${user.firstName} ${user.lastName}${user.job ? ": " + user.job : ""}`}</p>
                        </li>
                        <li onClick={() => this.logOut()} className="navigation__links__account__in__profile__dropdown__item">
                            <a href="#">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Account;