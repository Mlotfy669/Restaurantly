import './footer.scss';
import { useEffect } from 'react';
import WOW from 'wowjs';
import { ImFacebook,ImGithub } from 'react-icons/im';
import { SiTwitter, SiLinkedin } from 'react-icons/si';

export default function Footer() {
    useEffect(() => {
        new WOW.WOW().init();
    },[])
    return (
        <div className="footer">
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Copyright 2021 RESTAURANTLY - Built With <span>Mahmoud Lotfy</span></h4>
                        <ul className="socail-link">
                            <li> <SiTwitter className="soicon"/></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100011181729823" ><ImFacebook className="soicon"/></a></li>
                            <li><a href="https://github.com/Mlotfy669?tab=repositories" ><ImGithub className="soicon"/></a></li>
                            <li><a href="https://www.linkedin.com/in/mlotfy669/" ><SiLinkedin className="soicon"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}