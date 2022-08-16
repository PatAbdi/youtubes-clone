import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        Title: 'Home',
        Path: '/',
        Icon: <AiIcons.AiOutlineHome/>,
        CName: 'Nav-text'
    },

    {
        Title: 'Explore',
        Path: '/Explore',
        Icon: <MdIcons.MdOutlineExplore/>,
        CName: 'Nav-text'
    },

    {
        Title: 'Library',
        Path: '/Library',
        Icon: <MdIcons.MdOutlineVideoLibrary/>,
        CName: 'Nav-text'
    },

    {
        Title: 'Subscriptions',
        Path: '/Subscriptions',
        Icon: <MdIcons.MdOutlineSubscriptions/>,
        CName: 'Nav-text'
    }
]

export default SidebarData