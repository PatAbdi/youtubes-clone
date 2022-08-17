import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";
import  * as VsIcons from "react-icons/vsc";

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
    },

    {
        Title: 'History',
        Path: '/History',
        Icon: <VsIcons.VscHistory/>,
        CName: 'Nav-text'
    },

    {
        Title: 'Your Videos',
        Path: '/Your Videos',
        Icon: <AiIcons.AiOutlinePlaySquare/>,
        CName: 'Nav-text'
    },

    {
        Title: 'Watch Later',
        Path: '/Watch Later',
        Icon: <MdIcons.MdOutlineWatchLater/>,
        CName: 'Nav-text'
    },

    {
        Title: 'PlayList',
        Path: '/PlayList',
        Icon: <MdIcons.MdOutlineSubscriptions/>,
        CName: 'Nav-text'
    },

    {
        Title: 'Show More',
        Path: '/Show More',
        IconClosed: <Io5Icons.IoChevronDown/>,
        IconOpened: <Io5Icons.IoChevronDown/>,
        CName: 'Nav-text',
        SubNav: [

            {
                Title: 'Liked Videos',
                Path: '/Liked Videos',
                Icon: <AiIcons.AiOutlineLike/>,
                CName: 'Nav-text',
            }

        ]
    },


]

export default SidebarData