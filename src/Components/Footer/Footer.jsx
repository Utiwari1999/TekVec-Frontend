import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return(
        <>
            <div class='footer'>
            <div className="inname">
                <div>
                    </div>
                    <div className="iiitv-name">
                       TekVec
                    </div>
                </div>

                <div className="linkcon">
                    <div className="footerlin">
                        <div className="link-drop">
                            <div className="linkna">
                                LINKS
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="links" id="cyka">
                            <HashLink smooth scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })} to="/#homepage" className="link">Home</HashLink>
                            <HashLink smooth scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })} to="/#howitworks" className="link">How It Works</HashLink>
                            <HashLink smooth scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'start' })} to="/#coursesoffered" className="link">Courses Offered</HashLink>
                        </div>
                    </div>
                    <div className="footerlin">
                        <div className="link-drop">
                            <div className="linkna">
                                Social
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="links" id="cyka">
                            <a href="/#" className="link">Facebook</a>
                            <a style={{display: "table-cell"}} href="https://twitter.com/TekvecOfficial" target="_blank" className="link">Twitter</a>
                            <a style={{display: "table-cell"}}  href="https://www.instagram.com/tekvec/" target="_blank" className="link">Instagram</a>
                            <a  href="/#" className="link">LinkedIn</a>
                        </div>
                    </div>

                    <div className="footerlin">
                        <div className="conna">
                            CONTACT
                        <div className="underline"></div>
                        </div>
                        <div className="contact">
                            <div className="clink">Email: <div className="con-details">team.tekvec@gmail.com</div></div>
                            <div className="clink">Phone: <div className="con-details">+91-8810441336</div></div>
                            <div className="clink">Address: <div className="con-details">H183, Gamma-2 Ground Floor Greater Noida 201308</div></div>
                        </div>
                    </div>
                </div>
                <div style={{paddingLeft:'0px', paddingRight:'0px', marginLeft:'0px', marginRight:'0px', textAlign:'center'}} className="disclaimer">
                    <span>
                        Disclaimer:
                    </span>
                    <span>
                    This website is built and  handled by the development team of TekVec.
                    </span>
                </div>
                <hr className="lastline"></hr>
                <div className="dev">
                    <div className="cc">
                    <p style={{paddingLeft:'0px', paddingRight:'0px', marginLeft:'0px', marginRight:'0px', textAlign:'center'}} className="p-dev">Developed With ❤️️ By TekVec.com @2021</p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Footer;