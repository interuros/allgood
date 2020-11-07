import React, { Component } from 'react'
import { faEnvelope, faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Navigation.scss'
import logo from '../../assets/logo.png'
import accImg from '../../assets/account_default.jpg'

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation" id="navigation">
                <div className="navigation__logo">
                    <a href="#">                    
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                
                <div className="navigation__links">
                    <ul className="navigation__links__list">
                        <li className="navigation__links__list__item navigation__links__list__item--active">
                            <a href="#">Search items</a>
                        </li>
                        <li className="navigation__links__list__item">
                            <a href="#">Post items</a>
                        </li>
                    </ul>
                    <div className="navigation__links__account">
                        <div className="navigation__links__account__out hide">
                            <a href="#" className="button button--red">
                                <span>Sign in</span>
                            </a>
                            <a href="#" className="button button--white">
                                <span>Sign up</span>
                            </a>
                        </div>
                        <div className="navigation__links__account__in">
                            <a href="#" className="navigation__links__account__in__icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a href="#" className="navigation__links__account__in__icon navigation__links__account__in__icon--alert">
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
                                        <p>Signed in as Username</p>
                                    </li>
                                    <li className="navigation__links__account__in__profile__dropdown__item">
                                        <a href="#">Log out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
                
            </nav>
        )
    }
} 


export default Navigation;