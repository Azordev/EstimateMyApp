import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  max-width: 1010px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const LogoBox = styled.div`
  width: 15%;
  text-align: left;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &:hover {
        background-color: #ddd;
        color: black;
    }
`;

export const Logo = styled.img`
    height: 30px;
`;

export const NavHeader = styled.div`
  max-width: 1010px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const NavLinks = styled.div`
  width: 33.333%;
  text-align: right;
`;