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
                    <li class="item1">
                        <a href="https://www.linkedin.com/in/antoine-lamontagne-989121230/">ln</a>
                    </li>
                    <li class="item2">
                        <a href="https://www.instagram.com/antoine.lamontagne/">ig</a>
                    </li>
                    <li class="item3">
                        <a href="https://www.facebook.com/antoine.lamontagne.315/">fb</a>
                    </li>
                    <li class="item4">
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
