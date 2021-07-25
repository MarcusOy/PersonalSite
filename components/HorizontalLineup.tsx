import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import { Box, Image } from 'rebass'
import DataStore from '../data/DataStore'
import { useTheme } from './Theme'
import BaseText from './Typography/BaseText'
import Heading from './Typography/Heading'

export interface ILineupItemProps {
    image: string
    title: string
    subtitle?: string
    label?: string
    wide?: boolean
}
export interface IHorizontalLineupProps {
    items: ILineupItemProps[]
}

export const LineupItem = (p: ILineupItemProps) => {
    const { currentIndex, isMenuAccessedOnce } = DataStore.useState((s) => s)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    return (
        <Box
            className="hov-scale-min"
            width={175}
            p={15}
            mr={25}
            sx={{ borderRadius: 20 }}
            backgroundColor="#171717"
        >
            <BaseText
                mb={2}
                fontSize={11}
                // fontWeight="bold"
                letterSpacing={1.05}
                sx={{ textTransform: 'uppercase' }}
                color={currentAccent}
            >
                {p.label}
            </BaseText>
            <Image
                src={p.image}
                sx={{
                    pointerEvents: 'none',
                }}
            />

            <BaseText py={2} fontWeight="bold">
                {p.title}
            </BaseText>
            <BaseText fontSize={12} color="#E4E4E4">
                {p.subtitle}
            </BaseText>
        </Box>
    )
}
const HorizontalLineup = (p: IHorizontalLineupProps) => {
    let items = p.items.map((l, i) => {
        return <LineupItem key={i} {...l} />
    })

    return (
        <ScrollMenu
            data={items}
            menuStyle={{ width: '100%' }}
            wrapperStyle={{ width: '100%', overflow: 'unset' }}
            itemStyle={{ outline: 'none' }}
            hideArrows
            dragging
            inertiaScrolling
        />
    )
}

export default HorizontalLineup
