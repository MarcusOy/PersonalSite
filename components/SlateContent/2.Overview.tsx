import React from 'react'
import { FaCodeBranch, FaFilm, FaRegObjectGroup } from 'react-icons/fa'
import { Box, Flex } from 'rebass'
import DataStore from '../../data/DataStore'
import { useTheme } from '../Theme'
import BaseText from '../Typography/BaseText'
import Title from '../Typography/Title'

const OverviewSlateContent = () => {
    const { currentIndex } = DataStore.useState()
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    const features = [
        {
            icon: FaCodeBranch,
            name: (
                <>
                    Software
                    <br /> Engineering
                </>
            ),
        },
        {
            icon: FaFilm,
            name: (
                <>
                    Video and
                    <br /> Photo
                </>
            ),
        },
        {
            icon: FaRegObjectGroup,
            name: (
                <>
                    UI/UX
                    <br /> Design
                </>
            ),
        },
    ]

    return (
        <Flex style={{ flexDirection: 'column' }}>
            <Title my={50}>🚀 Overview</Title>
            <div style={{ flexGrow: 1 }} />
            <Flex>
                {features.map((f, i) => {
                    return (
                        <Box
                            backgroundColor={currentAccent}
                            height={350}
                            width={250}
                            sx={{ position: 'relative', borderRadius: 50 }}
                            mr={10}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 50,
                                    left: 20,
                                }}
                            >
                                <f.icon className="feature-icon" />
                                <BaseText>{f.name}</BaseText>
                            </div>
                        </Box>
                    )
                })}
            </Flex>
            <div style={{ flexGrow: 1 }} />
        </Flex>
    )
}

export default OverviewSlateContent
