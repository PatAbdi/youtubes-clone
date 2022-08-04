import './Sidebar.css';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import SubMenu from './SubMenu';


const Sidebar = () => {

  const [Sidebar, setSidebar] = useState (false)

  const ShowSidebar = () => setSidebar(!Sidebar)
  return (
    <>
      <div className='navbar'>
        <Link to='#'>
          <FaIcons.FaBars className='menubar' onClick={ShowSidebar}/>
        </Link>

      </div>




    <div className={Sidebar ? 'nav-menu active' : 'nav-menu'}>

      <ul className='nav-menu-items' >
        <li className='nav-toggle'>
        <Link to='#'>
          <FaIcons.FaBars className='menubar' onClick={ShowSidebar}/>
        </Link>
       
        </li>
      {SidebarData.map((sideData, index) => {
        return <SubMenu sideData={sideData} key={index} className={sideData.CName}/>;
      })}


      </ul>
      </div>
      
    </>
    
  )
}

export default Sidebar