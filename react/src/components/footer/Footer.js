import React, {Component} from 'react';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Footer.scss';
import logo from '../../assets/logo-footer.png'


class Footer extends Component {


    render() {


        const links = [
            {title: "Allgood", links: [
                {link: void(0), text: "About us"},
                {link: void(0), text: "Contact"},
                {link: void(0), text: "Help"}
            ]},
            {title: "Charities", links: [
                {link: void(0), text: "Charity/Campaign partners"},
                {link: void(0), text: "Sign up charity/campaign"}
            ]}
        ]


        return (
            <footer className="customfooter">
                <div className="customfooter__container">
                    <div className="customfooter__container__social">
                        <div className="customfooter__container__social__logo">
                            <img src={logo} alt=""/>
                        </div>
                        <p className="customfooter__container__social__text">
                            Online marketplace, where you can sell your stuff in support of the charity of campaign you choose.
                        </p>
                        <div className="customfooter__container__social__links">
                            <a href={void(0)}>
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                            </a>
                            <a href={void(0)}>
                                <FontAwesomeIcon icon={faInstagramSquare}/>
                            </a>
                            <a href={void(0)}>
                                <FontAwesomeIcon icon={faTwitterSquare}/>
                            </a>
                        </div>
                    </div>
                    {links.map((list, index) => {
                        return(
                            <div key={index} className="customfooter__container__info">    
                                <h3 className="customfooter__container__info__title">
                                    {list.title}
                                </h3>
                                <ul className="customfooter__container__info__links">
                                    {list.links.map((link, num) => {
                                        return(
                                            <li key={num} className="customfooter__container__info__links__item">
                                                <a href={link.link}>{link.text}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                    <div className="customfooter__container__copyright">
                        <p className="customfooter__container__copyright__text">© AllGood {new Date().getFullYear()}. All Rights Reserved</p>
                        <ul className="customfooter__container__copyright__links">
                            <li className="customfooter__container__copyright__links__item">
                                <a href={void(0)}>Privacy Policy</a>
                            </li>
                            <li className="customfooter__container__copyright__links__item">
                                <a href={void(0)}>Terms of Services</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
} 


export default Footer;