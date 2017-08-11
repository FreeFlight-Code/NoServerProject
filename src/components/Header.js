import React, { Component } from 'react';
import logo from '../images/logo.svg'


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="logoholder">
                <img src={logo} className="logo" alt="logo" />

                </div>
                <div className='login'><p>Apply Here</p> <p>Login </p>

                </div>
                <div className="nav">
                    <ul>
                        <li className="latestNews">Latest News</li>
                        <li className="testimonials">Testimonials</li>
                        <li className="aboutUs">About Us</li>
                    </ul>    

                </div>
                
            </div>
        );
    }
}

export default Header;