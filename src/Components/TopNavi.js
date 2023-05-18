import { AiOutlineSearch } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { TbShoppingCart } from "react-icons/tb";
import {RxHamburgerMenu} from 'react-icons/rx';

import logoImg from '../images/logoImg.png'

const TopNavi = () => {
    
    return(
        <>
            <div className="top_navi_container">
                <div className="top_navi_logo_container">
                    <img src={logoImg} alt="logo" className="logo_img" />
                </div>
                <div className="top_navi_hamburger for_mobile">
                    <RxHamburgerMenu />
                </div>
                <div className="top_navi_menu_container for_desktop">
                    <ul>
                        <li>HEADPHONES</li>
                        <li>EARPHONES</li>
                        <li>SPEAKERS</li>
                        <li>EXPLORE</li>
                    </ul>
                </div>

                <div className="top_navi_my_menu for_desktop">
                    <AiOutlineSearch className="top_navi_icon"/>
                    <FiUser className="top_navi_icon"/>
                    <TbShoppingCart className="top_navi_icon"/>
                </div>
            </div>
        </>
    );
}

export default TopNavi;