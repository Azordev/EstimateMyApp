import React from 'react'
import { Grommet, grommet } from 'grommet';
import GlobalStore from '../../../store/globalStore';
import AppNav from '../Nav/visual/Nav';
import { Main } from '../style/component';

const Page = ({ children = undefined }) => (
    <GlobalStore>
        <Grommet theme={grommet} full name='Grommet Provider'>
            <AppNav name='NavBar'/>
            <Main name='Main Container 💼'>
                {children}
            </Main>
        </Grommet>
    </GlobalStore>
)

export default Page