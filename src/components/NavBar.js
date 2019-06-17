import React from 'react'
import {Image, Menu } from 'semantic-ui-react';

const NavBar = (props) => {
    return(
        <Menu>
            <Image circular src={props.user.profile_img} />
        </Menu>
    )
}

export default NavBar