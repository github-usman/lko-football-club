import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import lko_footbal_club_logo from "../assets/lucknow-footbal-club-logo.png";
import { FaUser } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Navbar = () => {
    const [active, setActive] = useState('/')

    const handleActive = (id) => {
      setActive(id)
    }
  return (
    <div style={{display:'flex',justifyContent:'space-between', color:'#F24423',margin:'1rem 0'}}>
      <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <img src={lko_footbal_club_logo} alt="lucknow footbal club logo" width={90} height={115}/>
      <p style={{fontSize:'6.3px',fontWeight:'bold'}}>LUCKNOW FOOTBALL CLUB</p>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <h1 style={{marginTop:'1.3rem',fontWeight:'bold'}}>LUCKNOW FOOTBALL CLUB</h1>
        <ul style={{display:'flex',gap:'1rem',marginTop:'2rem',listStyle:'none',marginBottom:'0.8rem'}}>
            <li  onClick={() => handleActive('/')} > <NavLink className={` ${active === '/' ? 'active-btn' : 'none-btn'}`} to={"/"}>HOME</NavLink></li>
            <li  onClick={() => handleActive('/about')} > <NavLink className={` ${active === '/about' ? 'active-btn' : 'none-btn'}`} to={"/about"}>ABOUT</NavLink></li>
            <li  onClick={() => handleActive('/squad')} > <NavLink className={` ${active === '/squad' ? 'active-btn' : 'none-btn'}`} to={"/squad"}>SQUAD</NavLink></li>
            <li  onClick={() => handleActive('/lfc-tv')} > <NavLink className={` ${active === '/lfc-tv' ? 'active-btn' : 'none-btn'}`} to={"/lfc-tv"}>LFC TV</NavLink></li>
            <li> <NavLink className={` ${active === '#' ? 'active-btn' : 'none-btn'}`} to={"#"}>CONTACT</NavLink></li>
            <li> <NavLink className={` ${active === '#' ? 'active-btn' : 'none-btn'}`} to={"#"}>TICKETS</NavLink></li>
            <li> <NavLink className={` ${active === '#' ? 'active-btn' : 'none-btn'}`} to={"#"}>SHOP</NavLink></li>
            <li> <NavLink className={` ${active === '#' ? 'active-btn' : 'none-btn'}`} to={"#"}>APPLICATION</NavLink></li>
        </ul>
      </div>
      <div style={{display:'flex',justifyContent:'space-between', flexDirection:'column',width:'6rem'}}>
        <div style={{display:'flex',gap:'1rem',justifyContent:'space-between',color:'#9A3A14'}}>
            <IoMailSharp size={20}/>
            <FaInstagram size={20}/>
            <FaFacebook size={20}/>
        </div>
        {active === "/" && (
          <div style={{ alignSelf: "flex-end" }}>
            <FaUser size={45} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
