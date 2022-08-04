import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const SubMenu = ({sideData}) => {

    const [SubNav, setSubNav] = useState (false);

    const ShowSubNav = () => setSubNav(!SubNav);
  return (
    <>
   
    <div className={sideData.CName}>
            <Link to={sideData.path} onClick={sideData.SubNav && ShowSubNav}>
              {sideData.Icon}
              <span>{sideData.title}</span>
              <div className={sideData.CName}>
                {sideData.SubNav && SubNav ? sideData.iconOpened : sideData.SubNav ? sideData.iconClosed : null}
            </div>
            </Link>
            
    </div>
    {SubNav && sideData.SubNav.map((subnavs, index) => {
        return (
            <Link to={subnavs.path} className={sideData.CName}>
                {subnavs.Icon}
              <span>{subnavs.title}</span>
            </Link>
        )
    })}

   
    </>
  )
}

export default SubMenu