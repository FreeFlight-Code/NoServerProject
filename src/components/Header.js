import React, { Component } from 'react';
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="logoholder">
                <Link to="/" className="link">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                </div>
                <Link to="/Login" className="link">
                    <div className='login'><p>Apply Here</p> <p>Login </p></div>
                </Link>
                
                <div className="nav">
                    <ul>
                        <Link to="/LatestNews" className="link"><li className="latestNews">Latest News</li></Link>
                        <Link to="/Testimonials" className="link"><li className="testimonials">Testimonials</li></Link>
                        <Link to="/AboutUs" className="link"><li className="aboutUs">About Us</li></Link>
                    </ul>    

                </div>
                
            </div>
        );
    }
}

export default Header;
