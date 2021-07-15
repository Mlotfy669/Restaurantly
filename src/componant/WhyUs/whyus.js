import './whyus.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function WhyUs() {

    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <div className="whyus">
            <div className="container">
                <div className="info wow animate__zoomIn" data-wow-duration="1s">
                <span className="whyspan">WHY US</span>
                <h2>Why Choose Our Restaurant</h2>
                </div>
                <div className="parts wow animate__zoomIn" data-wow-duration="1s">
                    <div className="part">
                        <h3>01</h3>
                        <span>Lorem Ipsum</span>
                        <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                    </div>
                    <div className="part">
                        <h3>02</h3>
                        <span>Repellat Nihil</span>
                        <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                    </div>
                    <div className="part">
                        <h3>03</h3>
                        <span>Ad ad velit qui</span>
                        <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}