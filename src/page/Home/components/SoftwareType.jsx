import React, { useState } from 'react'

import { Text, Box, Button } from 'grommet';
import { Desktop, Android, Apple, Robot } from 'grommet-icons';

const SoftwareType = () => {
    const [selectedColor, setSelectedColor] = useState('')

    return (
        <Box pad="medium" background="light-2">
            <Text>What kind of software do you want?</Text>
            <Box
                direction="row"
                border={{ color: selectedColor ? selectedColor : 'brand', size: 'large' }}
                pad="medium"
                background={selectedColor}
            >
                <Box>
                    <Button
                        primary
                        color='yellow'
                        icon={<Desktop size='xlarge' />}
                        label={
                            <p>Single Page Website</p>
                        }
                        onClick={() => setSelectedColor('yellow')}
                    />
                </Box>
                <Box>
                    <Button
                        primary
                        color='neutral-3'
                        icon={
                            <>
                                <Android size='xlarge' color='plain' />
                                or
                                    <Apple size='xlarge' color='plain' />
                            </>
                        }
                        label={
                            <p>App</p>
                        }
                        onClick={() => setSelectedColor('neutral-3')}
                    />
                </Box>
                <Box>
                    <Button
                        primary
                        color='neutral-1'
                        icon={<Robot size='xlarge' />}
                        label={
                            <p>Other/Custom Software</p>
                        }
                        onClick={() => setSelectedColor('neutral-1')}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default SoftwareType