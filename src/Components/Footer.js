import {IoLogoInstagram, IoLogoTwitter} from "react-icons/io";
import {GrFacebookOption} from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { useEffect, useState } from "react";

import logoImg from "../images/logoImg.png";

const Footer = () => {
    const [currentNav, setCurrentNav] = useState(0);

    const footerNavHandler = (number) =>{
        setCurrentNav(number);
    }

    useEffect(() => {
        console.log(currentNav);
    }, [currentNav])
    
    return(
        <>
            <div className="footer_container">
                <div className="footer_content">
                    <div className="logo_container">
                        <img src={logoImg} alt="logo" className="logo_img"/>
                    </div>

                    <div className="guide_container">
                        <div className="products_container">
                            <h2 className="footer_nav_header footer_ul_header" onClick={() => footerNavHandler(0)}>Products</h2>
                            <ul className={currentNav === 0 ? "footer_ul_container selected_guide" : "footer_ul_container unselected_guide"}>
                                <li>HEADPHONES</li>
                                <li>EARPHONES</li>
                                <li>SPEAKERS</li>
                                <li>ACCESSORIES</li>
                                <li>COLLABORATIONS</li>
                                <li>BEATSAUDIO</li>
                                <li>SOECIAL OFFERS</li>
                            </ul>
                        </div>

                        <div className="support_container">
                            <h2 className="footer_nav_header footer_ul_header" onClick={() => footerNavHandler(1)}>Support</h2>
                            <ul className={currentNav === 1 ? "footer_ul_container selected_guide" : "footer_ul_container unselected_guide"}>
                                <li>PRODUCT HELP</li>
                                <li>SERVICE & WARRANTY</li>
                                <li>REGISTER YOUR BEATS</li>
                                <li>UPDATE YOUR BEATS</li>
                                <li>AUTHORIZED SERVICE PROVIDERS</li>
                                <li>CONTACT SUPPORT</li>
                                <li>INTERNATIONAL NUMBERS</li>
                            </ul>
                        </div>

                        <div className="company_container">
                            <h2 className="footer_nav_header footer_ul_header" onClick={() => footerNavHandler(2)}>Company</h2>
                            <ul className={currentNav === 2 ? "footer_ul_container selected_guide" : "footer_ul_container unselected_guide"}>
                                <li>PRODUCT HELP</li>
                                <li>NEWS AND EVENTS</li>
                                <li>PROMOTION TERMS</li>
                                <li>PRIVACY POLICY</li>
                                <li>TRADEMARK</li>
                                <li>TERMS OF USE</li>
                                <li>COOKIES</li>
                            </ul>
                        </div>
                    </div>

                    <div className="follow_us">
                        <h2 className="footer_nav_header">Follow Us</h2>
                        <div className="logos footer_icons_container">
                            <IoLogoInstagram className="footer_icon"/>
                            <GrFacebookOption className="footer_icon" />
                            <IoLogoTwitter className="footer_icon" />
                            <BsTelephone className="footer_icon" />
                        </div>
                    </div>
                </div>

                <div className="copy_right_container for_desktop">
                    <span>CopyRight: 2020 Apple lnc. All rights reserved.</span>
                </div>
            </div>
        </>
    );
}

export default Footer;