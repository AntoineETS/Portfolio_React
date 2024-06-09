import React from 'react';
import './../css/Footer.css';

function Footer({ activeTab, onTabChange }) {
    return (
        <footer className="Footer">

            <div class='hr'>
                <div class='row'></div>
            </div>
            <div class="info" id="media">
                <p class="wow fadeInUp" data-wow-delay="0s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>follow me</p> 
                <ul class="horizontal-list">
                    <li className="item1" id="ln" class="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>
                        <a href="https://www.linkedin.com/in/antoine-lamontagne-989121230/">ln</a>
                    </li>
                    <li className="item2" id="ig" class="wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>
                        <a href="https://www.instagram.com/antoine.lamontagne/">ig</a>
                    </li>
                    <li className="item3" id="fb" class="wow fadeInUp" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>
                        <a href="https://www.facebook.com/antoine.lamontagne.315/">fb</a>
                    </li>
                    <li className="item4" id="git" class="wow fadeInUp" data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}>
                        <a href="https://github.com/AntoineETS">git</a>
                    </li>
                </ul>
                <br></br>
                <br></br>
            </div>
            <p>antoine.lamontagne.1@ens.etsmtl.ca</p>
        </footer>
    );
}

export default Footer;
