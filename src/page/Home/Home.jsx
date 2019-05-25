import React from 'react';
import { Accordion, AccordionPanel } from 'grommet';
import { Title, GeneralInfo, SoftwareType, Page } from './components';

const Home = () => (
    <Page>
        <Title
            title='Estimate My App'
            description='Select the items below which best describe your app and the features you require.'
        />
        <Accordion animate>
            <AccordionPanel label="💼 General information">
                <GeneralInfo />
            </AccordionPanel>
            <AccordionPanel label="💻/📱/🤖 Type of Software">
                <SoftwareType />
            </AccordionPanel>
        </Accordion>
    </Page>
)

export default Home