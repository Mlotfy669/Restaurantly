import './Chef.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
import imggal1 from '../img/chefs/chefs-1.jpg';
import imggal2 from '../img/chefs/chefs-2.jpg';
import imggal3 from '../img/chefs/chefs-3.jpg';
import { ImFacebook } from 'react-icons/im';
import { SiTwitter, SiLinkedin } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';
export default function Cheff() {

    useEffect(() => {
        new WOW.WOW().init();
    },[])
    return (
        <div className="cheff">
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="chfspan">CHEFS</span>
                    <h2>Our Proffesional Chefs</h2>
                </div>
                <div className="bigbox">
                    <div className="box-chef ">
                        <div className="overlay"></div>
                        <div className="chefinfo">
                            <h5>Walter White</h5>
                            <span>Master Chef</span>
                            <div className="icons">
                                <SiTwitter className="ic" />
                                <ImFacebook className="ic" />
                                <FaInstagram className="ic" />
                                <SiLinkedin className="ic" />
                            </div>
                        </div>
                        <img src={imggal1} />
                    </div>
                    <div className="box-chef ">
                    <div className="overlay"></div>
                        <div className="chefinfo">
                            <h5>Sarah Jhonson</h5>
                            <span>Patissier</span>
                            <div className="icons">
                                <SiTwitter className="ic" />
                                <ImFacebook className="ic" />
                                <FaInstagram className="ic" />
                                <SiLinkedin className="ic" />
                            </div>
                        </div>
                        <img src={imggal2} />
                    </div>
                    <div className="box-chef ">
                    <div className="overlay"></div>
                    <div className="chefinfo">
                            <h5>William Anderson</h5>
                            <span>Cook</span>
                            <div className="icons">
                                <SiTwitter className="ic" />
                                <ImFacebook className="ic" />
                                <FaInstagram className="ic" />
                                <SiLinkedin className="ic" />
                            </div>
                        </div>
                        <img src={imggal3} />
                    </div>
                </div>
            </div>

        </div>
    )
}