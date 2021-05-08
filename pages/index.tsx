import Head from 'next/head'
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Slate from '../components/Slate'
import { Box } from 'rebass'
import { useTheme } from '../components/Theme'

import HomeSlateContent from '../components/SlateContent/1.HomeSlate'

import 'aos/dist/aos.css'
import MenuSpeedDial from '../components/MenuSpeedDial'
import DataStore from '../data/DataStore'
import OverviewSlateContent from '../components/SlateContent/2.Overview'
import AboutMeSlateContent from '../components/SlateContent/3.AboutMe'
import FullPage from '../components/FullPage'
import { Slates } from '../components/FullPageContent'

export default function Home() {
    // Color n Animation stuff
    const currentIndex = DataStore.useState((s) => s.currentIndex)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    // Section Names
    let sectionNames = Slates.map((s) => s.name)

    return (
        <>
            <Head>
                <title>Marcus Orciuch | Personal Website</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box
                backgroundColor={currentAccent}
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    transition: 'background-color 0.5s',
                }}
            />
            <FullPage sectionNames={sectionNames} />
            <MenuSpeedDial />
        </>
    )
}
