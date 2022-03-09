import './specials.scss';
import { useState, useEffect } from 'react';
import WOW from 'wowjs';
import img1 from '../img/specials-1.png';
import img2 from "../img/specials-2.png";
import img3 from "../img/specials-3.png";
import img4 from "../img/specials-4.png";
import img5 from "../img/specials-5.png";

export default function Specials() {

    const [cardnum, setCardnum] = useState('one');
    const [activestate, setActivestate] = useState('1');

    useEffect(() => {
        new WOW.WOW().init();
    },[])
    useEffect(() => {
        // if (activestate === '1') {
        //     document.querySelectorAll(".list button").forEach((e) => {
        //         e.classList.remove("active");
        //     });
        //     document.querySelector(".btn11").classList.add("active");
        // } else if (activestate === '2') {
        //     document.querySelectorAll(".list button").forEach((e) => {
        //         e.classList.remove("active");
        //     });
        //     document.querySelector(".btn22").classList.add("active");
        // }else if (activestate === '3') {
        //     document.querySelectorAll(".list button").forEach((e) => {
        //         e.classList.remove("active");
        //     });
        //     document.querySelector(".btn33").classList.add("active");
        // }else if (activestate === '4') {
        //     document.querySelectorAll(".list button").forEach((e) => {
        //         e.classList.remove("active");
        //     });
        //     document.querySelector(".btn44").classList.add("active");

        // }else  {
        //     document.querySelectorAll(".list button").forEach((e) => {
        //         e.classList.remove("active");
        //     });
        //     document.querySelector(".btn55").classList.add("active");
        // }
        if (cardnum === 'two') {
            let e1 = document.querySelectorAll(".part");
            let i;
            for (i = 0; i < e1.length; i++) {
                e1[i].style.display = 'none';
            }
            let x = document.querySelector(".twop");
            x.style.display = 'flex';
        } else if (cardnum === 'one') {
            let e1 = document.querySelectorAll(".part");
            let i;
            for (i = 0; i < e1.length; i++) {
                e1[i].style.display = 'none';
            }
            let x = document.querySelector(".onep");
            x.style.display = 'flex';
        } else if (cardnum === 'three') {
            let e1 = document.querySelectorAll(".part");
            let i;
            for (i = 0; i < e1.length; i++) {
                e1[i].style.display = 'none';
            }
            let x = document.querySelector(".threep");
            x.style.display = 'flex';
        } else if (cardnum === 'four') {
            let e1 = document.querySelectorAll(".part");
            let i;
            for (i = 0; i < e1.length; i++) {
                e1[i].style.display = 'none';
            }
            let x = document.querySelector(".fourp");
            x.style.display = 'flex';
        } else {
            let e1 = document.querySelectorAll(".part");
            let i;
            for (i = 0; i < e1.length; i++) {
                e1[i].style.display = 'none';
            }
            let x = document.querySelector(".fivep");
            x.style.display = 'flex';
        }
    }, [cardnum, activestate]);
    return (
        <div className="special">
            <div className="container  wow animate__zoomIn" data-wow-duration="1s">
                <div className="info">
                    <span className="spespan">SPECIALS</span>
                    <h2>Check Our Specials</h2>
                </div>
                <div className="show">
                    <div className="list">
                        <button className="btn11" onClick={(e) => { e.preventDefault(); setCardnum('one'); setActivestate('1'); }}>Modi sit est</button>
                        <button className="btn22" onClick={(e) => { e.preventDefault(); setCardnum('two'); setActivestate('2'); }}>Unde praesentium sed</button>
                        <button className="btn33" onClick={(e) => { e.preventDefault(); setCardnum('three'); setActivestate('3'); }}>Pariatur explicabo vel</button>
                        <button className="btn44" onClick={(e) => { e.preventDefault(); setCardnum('four'); setActivestate('4'); }}>Nostrum qui quasi</button>
                        <button className="btn55" onClick={(e) => { e.preventDefault(); setCardnum('five'); setActivestate('5'); }}>Iusto ut expedita aut</button>
                    </div>
                    <div className="select">
                        <div className={`part onep  ${cardnum}`} >
                            <div className="info">
                                <h3>Architecto ut aperiam autem id</h3>
                                <span>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</span>
                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </div>
                            <img src={img1} />
                        </div>
                        <div className={`part twop  ${cardnum}`} >
                            <div className="info">
                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                <span>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</span>
                                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                            </div>
                            <img src={img2} />
                        </div>
                        <div className={`part threep  ${cardnum}`} >
                            <div className="info">
                                <h3>Impedit facilis occaecati odio neque</h3>
                                <span>Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</span>
                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                            </div>
                            <img src={img3} />
                        </div>
                        <div className={`part fourp  ${cardnum}`} >
                            <div className="info">
                                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                <span>Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</span>
                                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                            </div>
                            <img src={img4} />
                        </div>
                        <div className={`part fivep  ${cardnum}`} >
                            <div className="info">
                                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                <span>Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</span>
                                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                            </div>
                            <img src={img5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}