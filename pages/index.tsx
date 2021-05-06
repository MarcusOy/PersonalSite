import Head from 'next/head'
import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Slate from '../components/Slate'
import { Box, Flex } from 'rebass'
import { useTheme } from '../components/Theme'

import { FaEnvelope, FaInstagram } from 'react-icons/fa'
import { SpeedDial, SpeedDialAction } from '@material-ui/lab'
import BodyText from '../components/Typography/BodyText'
import HomeSlateContent from '../components/SlateContent/1.HomeSlate'
import {
    slatePopInAnimation,
    speedDialDescAnimation,
} from '../components/Animations'

import 'aos/dist/aos.css'

export default function Home() {
    // Color n Animation stuff
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    // SpeedDial stuff
    const [isSPOpen, setIsSPOpen] = React.useState(false)
    const actions = [
        { icon: <FaEnvelope />, name: 'Email', onClick: () => {} },
        { icon: <FaInstagram />, name: 'Instagram DM', onClick: () => {} },
    ]

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
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
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
                    setIsTransitioning(true)
                    let slates = document.getElementsByClassName('section')
                    for (let x = 0; x < slates.length; x++) {
                        slates[x].classList.remove('slate-in')
                        slates[x].classList.add('slate-out')
                    }

                    // Change the color half way
                    setTimeout(() => {
                        setCurrentIndex(d.index)
                    }, 500)
                }}
                afterLoad={() => {
                    // Pop in each slate
                    setIsTransitioning(false)
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
                                    index={currentIndex}
                                    onChevPress={() => {
                                        s.fullpageApi.moveSectionDown()
                                    }}
                                />
                            </Slate>
                            <Slate></Slate>
                            <Slate></Slate>
                            <Slate></Slate>
                            <Slate></Slate>
                            <Slate></Slate>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />
            <Flex
                alignItems="end"
                style={{ position: 'absolute', bottom: 50, right: 50 }}
            >
                <BodyText
                    {...speedDialDescAnimation}
                    textAlign="right"
                    mx={10}
                    mb={10}
                >
                    Get in touch with me <br /> using this button.
                </BodyText>
                <SpeedDial
                    ariaLabel="Contact SpeedDial"
                    icon={<BodyText fontSize={20}>📭</BodyText>}
                    onClose={() => {
                        setIsSPOpen(false)
                    }}
                    onOpen={() => {
                        setIsSPOpen(true)
                    }}
                    open={isSPOpen}
                    direction="up"
                    FabProps={{ style: { backgroundColor: currentAccent } }}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.onClick}
                        />
                    ))}
                </SpeedDial>
            </Flex>
        </>
    )
}
