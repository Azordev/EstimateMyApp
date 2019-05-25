import React from 'react'
import { Box } from 'grommet';
import { Workshop } from 'grommet-icons';
import Form from './Form';

const GeneralInfo = () => (
    <Box direction="row" pad="small" background="light-2" justify="center">
        <Box align="center" justify='center' width="small" >
            <Workshop color='plain' size='xlarge' />
        </Box>
        <Form />
    </Box>
)

export default GeneralInfo