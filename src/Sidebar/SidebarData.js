import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIosIcons from "react-icons/io";
import * as IoIcons from "react-icons/io5";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        Icon: <FaIcons.FaHome/>,
        CName: 'nav-text',
        iconClosed: <IoIosIcons.IoIosArrowDown/>,
        iconOpened: <IoIosIcons.IoIosArrowUp/>,

        SubNav: [
            {
                title: 'Users',
                path: '/Users',
                Icon: <IoIcons.IoPerson/>,
            },

            {
                title: 'Caller',
                path: '/Caller',
                Icon: <IoIcons.IoPerson/>,
            },

           
        ]
    },
    {
        title: 'Reports',
        path: '/Reports',
        Icon: <FaIcons.FaHome/>,
        CName: 'nav-text',
        iconClosed: <IoIosIcons.IoIosArrowDown/>,
        iconOpened: <IoIosIcons.IoIosArrowUp/>,

        SubNav: [
            {
                title: 'Users',
                path: '/Users',
                Icon: <IoIcons.IoPerson/>,
            },

            {
                title: 'Caller',
                path: '/Caller',
                Icon: <IoIcons.IoPerson/>,
            },

           
        ]
       
    },

    {
        title: 'Classes',
        path: '/Classes',
        Icon: <FaIcons.FaHome/>,
        CName: 'nav-text'
       
    },

    {
        title: 'Jim',
        path: '/Jim',
        Icon: <FaIcons.FaHome/>,
        CName: 'nav-text'
       
    },

    
    
]
 

export default SidebarData