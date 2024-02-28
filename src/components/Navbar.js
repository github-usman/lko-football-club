import React from "react";
import { Link } from "react-router-dom";
import lko_footbal_club_logo from "../assets/lucknow-footbal-club-logo.png";
import { FaUser } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between', color:'#F24423',marginTop:'1rem'}}>
      <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <img src={lko_footbal_club_logo} alt="lucknow footbal club logo" width={90} height={115}/>
      <p style={{fontSize:'6.3px',fontWeight:'bold'}}>LUCKNOW FOOTBALL CLUB</p>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
      <h1>LUCKNOW FOOTBALL CLUB</h1>
        <ul style={{display:'flex',gap:'1rem',marginTop:'2rem',listStyle:'none'}}>
            <li> <Link to={"/"}style={{ textDecoration: 'none' ,color:'#F24423'}}>HOME</Link></li>
            <li> <Link to={"/about"}style={{ textDecoration: 'none' ,color:'#F24423'}}>ABOUT</Link></li>
            <li> <Link to={"#"}style={{ textDecoration: 'none' ,color:'#F24423'}}>SQUAD</Link></li>
            <li> <Link to={"#"}style={{ textDecoration: 'none' ,color:'#F24423'}}>LFC TV</Link></li>
            <li> <Link to={"#"}style={{ textDecoration: 'none' ,color:'#F24423'}}>CONTACT</Link></li>
            <li> <Link to={"#"}style={{ textDecoration: 'none' ,color:'#F24423'}}>TICKETS</Link></li>
            <li> <Link to={"#"}style={{ textDecoration: 'none' ,color:'#F24423'}}>SHOP</Link></li>
            <li> <Link to={"#"}style={{ textDecoration: 'none' ,color:'#F24423'}}>APPLICATION</Link></li>
        </ul>
      </div>
      <div style={{display:'flex',justifyContent:'space-between', flexDirection:'column'}}>
        <div>
            <FaUser/>
            <FaUser/>
            <FaUser/>
        </div>
        <div>
            <FaUser size={60}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
