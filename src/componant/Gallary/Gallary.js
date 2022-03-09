import './Gallary.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
import imggal1 from '../img/gallery/gallery-1.jpg';
import imggal2 from '../img/gallery/gallery-2.jpg';
import imggal3 from '../img/gallery/gallery-3.jpg';
import imggal4 from '../img/gallery/gallery-4.jpg';
import imggal5 from '../img/gallery/gallery-5.jpg';
import imggal6 from '../img/gallery/gallery-6.jpg';
import imggal7 from '../img/gallery/gallery-7.jpg';
import imggal8 from '../img/gallery/gallery-8.jpg';
export default function Gallary() {

    useEffect(() => {
        new WOW.WOW().init();
    },[])
    return (
        <div className="gallary">
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="evespan">TESTIMONIALS</span>
                    <h2>What they're saying about us</h2>
                </div>
            </div>
            <div className="row">
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal1 }/>
                </div>
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal2 }/>
                </div>
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal3 }/>
                </div>
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal4 }/>
                </div>
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal5 }/>
                </div>
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal6 }/>
                </div>
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal7 }/>
                </div>
                <div className="box col-lg-3 col-md-3">
                    <img src={imggal8 }/>
                </div>
            </div>
        </div>
    )
}