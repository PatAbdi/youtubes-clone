import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from '../SidebarData/SidebarData';
import SubMenu from '../SidebarData/SubMenu';


const Navbar = () => {
    const [sidebar, setsidebar] = useState(false)

    const showsidebar = () => setsidebar(!sidebar)

  return (
    <>
    <div className='navbar'>
        <Link to='#' className='menu-bars'>
        <AiIcons.AiOutlineMenu onClick={showsidebar}/>
        </Link>
       </div>

       <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            <li className='nav-toggle'>
        <Link to="#" className='menu-bars'>
        <AiIcons.AiOutlineMenu onClick={showsidebar}/>
        </Link>
            </li>
            <li >
                {SidebarData.map((sidedata,index) => {
              return <SubMenu sidedata={sidedata} key={index}/>
            })}
            </li>
            
           
            

        </ul>

       </div>
    </>
    
  )
}

export default Navbar