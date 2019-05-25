import React from 'react'
import { Nav, NavHeader, NavLeft, NavCenter, NavRight, MenuLink } from '../style/component'
import Logo from '../../../assets/automation.png'
import { Image } from 'grommet';

const AppNav = () => (
    <Nav>
        <NavHeader>
            <NavLeft>
                <MenuLink href='http://www.google.com'>
                    <Image src={Logo} fit="contain" height='50px'/>
                </MenuLink>
            </NavLeft>
            <NavCenter>
                j
            </NavCenter>
            <NavRight>
                l
            </NavRight>
        </NavHeader>
    </Nav>
)


export default AppNav