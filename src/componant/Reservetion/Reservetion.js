import './Reservetion.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function Reservetion() {
    useEffect(() => {
        new WOW.WOW().init();
    },[])
    return (
        <div className="reserv">
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="evespan">RESERVATION</span>
                    <h2>Book a Table</h2>
                </div>
                <form >
                    <div className="form-row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                        </div>
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="text-center"><button type="submit">Book a Table</button></div>
                </form>
            </div>
        </div>
    )
}