import './home.scss';
import WOW from 'wowjs';
import React, { Component } from 'react';
import { BsPhone } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export default class Home extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div className="home">
                <div className="overlay"></div>
                <div className="time">
                    <div className="container">
                        <div className="info">
                            <span><BsPhone className="icon" /> +201023272380</span>
                            <span><AiOutlineClockCircle className="icon" /> Mon-Sat: 11AM-23PM</span>
                        </div>
                        <div>
                            <span className="lang"><span className="en">En </span>/<span className="de">  De</span></span>
                        </div>
                    </div>
                </div>
                <div className="navbar" >
                    <div className="container">
                        <a href="#" className="logo">Restaurantly</a>
                        <GiHamburgerMenu className="humIcon" />
                        <ul>
                            <li ><a className="activeLink" href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Specials</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Chefs</a></li>
                            <li><a href="#">Gallary</a></li>
                            <li><a href="#">Contact</a></li>
                            <a className="book" href="#">BOOK A TABLE</a>
                        </ul>

                    </div>
                </div>

                <div className="infoHome">
                    <h1 className="wow animate__slideInDown" data-wow-duration="1s">Welcome to <span className="restSpan">Restaurantly</span></h1>
                    <p className="wow animate__slideInDown" data-wow-duration="1s">Delivering great food for more than 18 years!</p>
                    <a href="#" className="wow animate__slideInDown" data-wow-duration="1s">OUR MENU</a>
                    <a href="#" className="wow animate__slideInDown" data-wow-duration="1s">BOOK A TABLE</a>
                </div>

            </div>
        )
    }
}