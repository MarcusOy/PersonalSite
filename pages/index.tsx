import Head from 'next/head'
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Slate from '../components/Slate'
import { Text } from 'rebass'
import Title from '../components/Typography/Title'

export default function Home() {
    return (
        <>
            <Head>
                <title>Marcus Orciuch | Personal Website</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                render={(s) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Slate>
                                <Title>
                                    👋 Hi, I'm Marcus Orciuch, a Software
                                    Engineer.
                                </Title>
                            </Slate>
                            <Slate></Slate>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />
        </>
    )
}
