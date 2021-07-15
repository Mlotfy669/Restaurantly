import './events.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
import imgeve from '../img/event-birthday.jpg';
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Events() {

    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <div className="events">
            <div className="overlay"></div>
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="evespan">EVENT</span>
                    <h2>Organize Your Events in our Restaurant</h2>
                </div>
                <div className="event_big">
                    <div className="imgpart">
                        <img src={imgeve} />
                    </div>
                    <div className="info_part">
                        <h3>Birthday Parties</h3>
                        <span>$189</span>
                        <p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <span ><AiOutlineCheckCircle className="checkicon" />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        <span><AiOutlineCheckCircle className="checkicon" />Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                        <span><AiOutlineCheckCircle className="checkicon" />Ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu a deserunt mollit anim id est laborum</p>

                    </div>
                </div>
            </div>
        </div>
    )
}