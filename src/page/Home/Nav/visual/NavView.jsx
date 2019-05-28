import React from 'react'
import * as S from '../style/component';

function NavView ({logo, navLinks}) {
    return (
        <S.Nav>
        <S.LogoBox>
            <S.Logo src={logo} />
            Estimate
        </S.LogoBox>
        <S.NavLinks>
            {navLinks}
        </S.NavLinks>
    </S.Nav>
    )
}

export default NavView