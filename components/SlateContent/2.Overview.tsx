import React from 'react'
import { FaCodeBranch, FaFilm, FaRegObjectGroup } from 'react-icons/fa'
import { Flex } from 'rebass'
import { Albums } from '../../data/Albums'
import DataStore from '../../data/DataStore'
import HorizontalLineup from '../HorizontalLineup'
import { useTheme } from '../Theme'
import { BodyTitle } from '../Typography/BodyTypography'

const OverviewSlateContent = () => {
    const { currentIndex } = DataStore.useState()
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    return (
        <Flex style={{ flexDirection: 'column' }}>
            <BodyTitle my={50}>🚀 Overview</BodyTitle>
            <div style={{ flexGrow: 1 }} />
            <HorizontalLineup items={Albums} />
            <div style={{ flexGrow: 1 }} />
        </Flex>
    )
}

export default OverviewSlateContent
