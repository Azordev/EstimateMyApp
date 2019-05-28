import React from 'react'
import { Grommet, grommet } from 'grommet';
import GlobalStore from '../../../store/globalStore';
import { Main } from '../style/component';
import { Nav } from '../Nav';

const Page = ({ children = undefined }) => (
    <GlobalStore>
        <Grommet theme={grommet} full name='Grommet Provider'>
            <Nav name='NavBar'/>
            <Main name='Main Container 💼'>
                {children}
            </Main>
        </Grommet>
    </GlobalStore>
)

export default Page