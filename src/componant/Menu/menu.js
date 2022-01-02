import './m3nu.scss';
import { useState, useEffect } from 'react';
import WOW from 'wowjs';
import img1 from '../img/menu/lobster-bisque.jpg';
import img2 from "../img/menu/bread-barrel.jpg";
import img3 from "../img/menu/cake.jpg";
import img4 from "../img/menu/caesar.jpg";
import img5 from "../img/menu/tuscan-grilled.jpg";
import img6 from "../img/menu/mozzarella.jpg";
import img7 from "../img/menu/greek-salad.jpg";
import img8 from "../img/menu/spinach-salad.jpg";
import img9 from "../img/menu/lobster-roll.jpg";

export default function Menu() {

    const [activestate, setActivestate] = useState('1');

    useEffect(() => {
        
        if (activestate === '1') {
            document.querySelector(".btn1").classList.add("activebtn");
            document.querySelector(".btn2").classList.remove("activebtn");
            document.querySelector(".btn3").classList.remove("activebtn");
            document.querySelector(".btn4").classList.remove("activebtn");
            document.querySelectorAll(".row .part").forEach(x => {
                x.style.display = 'flex';
            });
        } else if (activestate === '2') {
            document.querySelector(".btn2").classList.add("activebtn");
            document.querySelector(".btn1").classList.remove("activebtn");
            document.querySelector(".btn3").classList.remove("activebtn");
            document.querySelector(".btn4").classList.remove("activebtn");
            document.querySelectorAll(".row .part").forEach(x => {
                x.style.display = 'none';
                
            });
            document.querySelectorAll(".row .start").forEach(x => {
                x.style.display = 'flex';
            });
        }else if (activestate === '3') {
            document.querySelector(".btn3").classList.add("activebtn");
            document.querySelector(".btn1").classList.remove("activebtn");
            document.querySelector(".btn2").classList.remove("activebtn");
            document.querySelector(".btn4").classList.remove("activebtn");
            document.querySelectorAll(".row .part").forEach(x => {
                x.style.display = 'none';
            });
            document.querySelectorAll(".row .salad").forEach(x => {
                x.style.display = 'flex';
            });
        }else if (activestate === '4') {
            document.querySelector(".btn4").classList.add("activebtn");
            document.querySelector(".btn1").classList.remove("activebtn");
            document.querySelector(".btn2").classList.remove("activebtn");
            document.querySelector(".btn4").classList.remove("activebtn");
            document.querySelectorAll(".row .part").forEach(x => {
                x.style.display = 'none';
            });
            document.querySelectorAll(".row .spec").forEach(x => {
                x.style.display = 'flex';
            });
        }

    }, [activestate])
    useEffect(() => {
        new WOW.WOW().init();
    },[])
    
    return (
        <div className="menu">
            <div className="container wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="whyspan">MENU</span>
                    <h2>Check Our Tasty Menu</h2>
                </div>
                <div className="list">
                    <button className="activebtn btn1" onClick={(e) => { e.preventDefault(); setActivestate('1')}} >All</button>
                    <button className="btn2"  onClick={(e) => { e.preventDefault(); setActivestate('2')}}>Starters</button>
                    <button className="btn3" onClick={(e) => { e.preventDefault(); setActivestate('3')}}>Salads</button>
                    <button className="btn4" onClick={(e) => { e.preventDefault(); setActivestate('4')}}>Specialty</button>
                </div>
                <div className="row">
                    <div className="part start col-lg-6 col-sm-12">
                        <img src={img1} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Lobster Bisque </h6>
                                <span><span className="dot">  ....................................................................  </span> $5.95</span>
                            </div>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="part spec col-lg-6 col-sm-12">
                        <img src={img2} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Bread Barrel</h6>
                                <span><span className="dot">  ...........................................................................  </span>$6.95</span>
                            </div>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="part start col-lg-6 col-sm-12">
                        <img src={img3} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Crab Cake</h6>
                                <span><span className="dot">  ...........................................................................  </span>$7.95</span>
                            </div>
                            <p>A delicate crab cake served on a toasted roll with lettuce and tartar sauce</p>
                        </div>
                    </div>
                    <div className="part salad col-lg-6 col-sm-12">
                        <img src={img4} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Caesar Selections</h6>
                                <span><span className="dot">  ..................................................................  </span>$8.95</span>
                            </div>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="part spec col-lg-6 col-sm-12">
                        <img src={img5} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Tuscan Grilled</h6>
                                <span><span className="dot">  ......................................................................  </span>$9.95</span>
                            </div>
                            <p>Grilled chicken with provolone, artichoke hearts, and roasted red pesto</p>
                        </div>
                    </div>
                    <div className="part start col-lg-6 col-sm-12">
                        <img src={img6} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Mozzarella Stick</h6>
                                <span><span className="dot">  .................................................................  </span>$4.95</span>
                            </div>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="part salad col-lg-6 col-sm-12">
                        <img src={img7} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Greek Salad</h6>
                                <span><span className="dot">  ...........................................................................  </span>$9.95</span>
                            </div>
                            <p>Fresh spinach, crisp romaine, tomatoes, and Greek olives</p>
                        </div>
                    </div>
                    <div className="part salad col-lg-6 col-sm-12">
                        <img src={img8} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Spinach Salad</h6>
                                <span><span className="dot">  ........................................................................  </span>$9.95</span>
                            </div>
                            <p>Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette</p>
                        </div>
                    </div>
                    <div className="part spec col-lg-6 col-sm-12">
                        <img src={img9} />
                        <div className="info_male">
                            <div className="menu_title">
                                <h6>Lobster Roll</h6>
                                <span><span className="dot">    .........................................................................  </span>$12.95</span>
                            </div>
                            <p>Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}