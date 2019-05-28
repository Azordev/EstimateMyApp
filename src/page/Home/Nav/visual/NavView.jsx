import React from 'react'
import * as S from '../style/component';
import NavLinks from '../visual/NavLinks';


function NavView ({logo, navLinks}) {
    return (
        <S.Nav>
        <S.LogoBox>
            <S.Logo src={logo} />
            Estimate
        </S.LogoBox>
        {/* <S.NavCenter /> */}
        <S.NavLinks>
           <NavLinks  />
        </S.NavLinks>
    </S.Nav>
    )
}

export default NavView

