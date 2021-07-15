import './feature.scss'
import WOW from 'wowjs';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useEffect } from 'react';


export default function Feature() {

    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <div className="feature">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="part1 col-lg-6 col-xs-12  wow animate__zoomIn" data-wow-duration="1s">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <span ><AiOutlineCheckCircle className="checkicon"  />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        <span><AiOutlineCheckCircle className="checkicon" />Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                        <span><AiOutlineCheckCircle className="checkicon" />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="part2 col-lg-6 col-xs-12 wow animate__zoomIn" data-wow-duration="1s">
                        <div className="imgscont">
                            <div className="imgs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}