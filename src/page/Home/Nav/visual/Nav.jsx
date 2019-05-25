import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/automation.png'

const Img = styled.img`
    height: 25px;
    margin: 1px 16px;
`;


const TopNav = styled.nav`
    background-color: #333;
    overflow: hidden;
`;


const A = styled.a`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

   
    &:hover {
        background-color: #ddd;
        color: yellow;
    }
`;

const AActive = styled(A)`
&:hover{
color: #4CAF50;
}
`

const AppNav = () => (
    <TopNav>
        
        <A href="#home"><Img src={Logo} /></A>
        <A href="#news">News</A>
        <A href="#contact">Contact</A>
        <AActive href="#about">About</AActive>
    </TopNav>
)


export default AppNav