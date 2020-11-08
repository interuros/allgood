import React, { Component } from 'react'

class Buttons extends Component {

    render() {
        return (
            <div className="buttons">
                <a href={void(0)} className="button button--red">
                    <span>Sign in</span>
                </a>
                <a href={void(0)} className="button button--white">
                    <span>Sign up</span>
                </a>
            </div>      
        )
    }
} 


export default Buttons;