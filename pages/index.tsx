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

export default function Home() {
    // Color n Animation stuff
    const currentIndex = DataStore.useState((s) => s.currentIndex)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    const sectionNames = [
        'Landing',
        'Overview',
        'About',
        'Software',
        'Video',
        'Design',
    ]

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
            <ReactFullpage
                scrollingSpeed={1000}
                navigation={true}
                navigationPosition="right"
                anchors={sectionNames}
                navigationTooltips={sectionNames}
                afterRender={() => {
                    // Pop in first slate on load
                    document
                        .getElementsByClassName('section')[0]
                        .classList.add('slate-out')
                    setTimeout(() => {
                        document
                            .getElementsByClassName('section')[0]
                            .classList.remove('slate-out')
                    }, 1000)
                }}
                onLeave={(_, d) => {
                    // Pop out each slate
                    let slates = document.getElementsByClassName('section')
                    for (let x = 0; x < slates.length; x++) {
                        slates[x].classList.remove('slate-in')
                        slates[x].classList.add('slate-out')
                    }

                    // Change the color about half way
                    setTimeout(() => {
                        DataStore.update((s) => {
                            s.currentIndex = d.index
                        })
                    }, 350)
                }}
                afterLoad={() => {
                    // Pop in each slate
                    let slates = document.getElementsByClassName('section')
                    for (let x = 0; x < slates.length; x++) {
                        slates[x].classList.add('slate-in')
                        slates[x].classList.remove('slate-out')
                    }
                }}
                render={(s) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Slate>
                                <HomeSlateContent
                                    onChevPress={() => {
                                        s.fullpageApi.moveSectionDown()
                                    }}
                                />
                            </Slate>
                            <Slate>
                                <OverviewSlateContent />
                            </Slate>
                            <Slate></Slate>
                            <Slate></Slate>
                            <Slate></Slate>
                            <Slate></Slate>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />
            <MenuSpeedDial />
        </>
    )
}
