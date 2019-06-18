import React from 'react'
import {Image, Menu } from 'semantic-ui-react';

const NavBar = (props) => {

    return(
        <Menu>
            <Menu.Item
                value='home'
                content='Home'
                onClick={(event) => props.handleClick(event)}
            />
            <Menu.Item
                 value='search'
                content='Search'
                onClick={(event) => props.handleClick(event)}
            />
            <Menu.Item
                 value='my-albums'
                content='My Albums'
                onClick={(event) => props.handleClick(event)}
            />
            <Menu.Item position="right">
                <Image circular src={props.user.profile_img} />
            </Menu.Item> 
        </Menu>
    )
}

export default NavBar