import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SidebarData from '../SidebarData/SidebarData';


const SubMenu = ({sidedata}) => {
    const [subnav, setsubnav] = useState(false)

    const showsubnav = () => setsubnav(!subnav)
  return (
   <>
  <Link to={sidedata.Path} onClick={sidedata.SubNav && showsubnav} className='subs'>
    <div className='navsubs'>
            {sidedata.Icon}
        <span>{sidedata.Title}</span>

    </div>

    <div>
        {sidedata.SubNav
         && subnav
         ? sidedata.IconOpened 
         : sidedata.SubNav
        ? sidedata.IconClosed
        : null}
    </div>
    {subnav && sidedata.SubNav.map((subs, index) => {
    return(
        <Link to={subs.Path} key={index} className='subsnav'>
            {subs.Icon}
            <span>{subs.Title}</span>
        </Link>
    )
  })}
  </Link>
   </>
  )
}

export default SubMenu