import './contact.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
import { ImLocation } from 'react-icons/im';
import { FaClock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
export default function Contact() {
    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <div className="contact">
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="chfspan">CHEFS</span>
                    <h2>Our Proffesional Chefs</h2>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
            <div className="container all wow animate__zoomIn" data-wow-duration="1s">
                <div className="info-data">
                    <div className="address">
                        <ImLocation className="icon" />
                        <div className="data">
                            <h4>Location:</h4>
                            <p>Aga, Dakahlia, Egypt</p>
                        </div>
                    </div>

                    <div className="open-hours">
                        <FaClock className="icon" />
                        <div className="data">
                            <h4>Open Hours:</h4>
                            <p>
                                Monday-Saturday:<br />
                                11: 00 AM - 2300 PM
                            </p>
                        </div>
                    </div>

                    <div className="email">
                        <MdEmail className="icon" />
                        <div className="data">
                            <h4>Email:</h4>
                            <p>M.lotfy669@yahoo.com</p>
                        </div>
                    </div>

                    <div className="phone">
                        <MdCall className="icon" />
                        <div className="data">
                            <h4>Call:</h4>
                            <p>+20 102 32 723 80</p>
                        </div>
                    </div>

                </div>
                <form >
                    <div className="form-row">
                        <div className="col-md-6 form-group">
                            <input type="text"  className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"  />
                        </div>
                        <div className="col-md-6 form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4"  />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="8" data-rule="required"  placeholder="Message"></textarea>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>

        </div>
    )
}