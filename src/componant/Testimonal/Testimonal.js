import './Testimonal.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
import { CgQuote } from "react-icons/cg";
import imgtest1 from '../img/testimonials/testimonials-4.jpg';
import imgtest2 from '../img/testimonials/testimonials-3.jpg';
import imgtest3 from '../img/testimonials/testimonials-1.jpg';
export default function Testimonal() {

    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <div className="test">
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="evespan">TESTIMONIALS</span>
                    <h2>What they're saying about us</h2>
                </div>
                <div className="cards">
                    <div className="cart_full">
                        <div className="cart">
                            <p><CgQuote className="quote"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu a deserunt mollit anim id est laborum<CgQuote className="quote"/></p>
                        </div>
                        <div className="test_info">
                            <img src={imgtest1} />
                            <h5>Matt Brandon</h5>
                            <span>Freelancer</span>
                        </div>
                    </div>
                    <div className="cart_full">
                        <div className="cart">
                            <p><CgQuote className="quote"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu a deserunt mollit anim id est laborum<CgQuote className="quote"/></p>
                        </div>
                        <div className="test_info">
                            <img src={imgtest2} />
                            <h5>Jena Karlis</h5>
                            <span>Store Owner</span>
                        </div>
                    </div>
                    <div className="cart_full">
                        <div className="cart">
                            <p><CgQuote className="quote"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu a deserunt mollit anim id est laborum<CgQuote className="quote"/></p>
                        </div>
                        <div className="test_info">
                            <img src={imgtest3} />
                            <h5>Saul Goodman</h5>
                            <span>Ceo & Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}