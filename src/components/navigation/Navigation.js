import React, { Component } from 'react'
import { faEnvelope, faBell, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Buttons from '../buttons/Buttons'

import './Navigation.scss'
import desktopLogo from '../../assets/logo.png'
import mobileLogo from '../../assets/logo-mobile.png'
import accImg from '../../assets/account_default.jpg'


class Navigation extends Component {


    constructor(props) {
        super(props);
        this.state = {};
        this.changeLogo = this.changeLogo.bind(this)
    }


    changeLogo = () => {
        this.setState({
            logo: this.props.mobile === true ? mobileLogo : desktopLogo
        })
    }
    

    componentDidMount() {
        this.changeLogo();
        window.addEventListener("resize", this.changeLogo);
    }


    componentWillUnmount() {
        window.removeEventListener("resize", this.changeLogo);
    }



    render() {
        return (
            <nav className="navigation" id="navigation">
                <div className="navigation__logo">
                    <a href={void(0)}>                   
                        <img src={this.state.logo} alt="logo"/>
                    </a>
                </div>

                <div className="navigation__form">
                    <form action="">
                        <input name="location" type="text" placeholder="Location"/>
                        <input name="category" type="text" placeholder="Category"/>
                        <input name="charity" type="text"  placeholder="Charity"/>
                        <button>
                        <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
                
                <div className="navigation__links">
                    <ul className="navigation__links__list">
                        <li className="navigation__links__list__item navigation__links__list__item--active">
                            <a href={void(0)}>Search items</a>
                        </li>
                        <li className="navigation__links__list__item">
                            <a href={void(0)}>Post items</a>
                        </li>
                    </ul>
                    <div className="navigation__links__account">
                        <Buttons toggleForm={this.props.toggleForm} />
                        <div className="navigation__links__account__in hide">
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