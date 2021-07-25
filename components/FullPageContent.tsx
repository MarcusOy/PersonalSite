import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Slate from './Slate'
import HomeSlateContent from './SlateContent/1.HomeSlate'
import OverviewSlateContent from './SlateContent/2.Overview'
import AboutMeSlateContent from './SlateContent/3.AboutMe'

const FullPageContent = (s) => {
    // Adding the down chev functionality to the Landing slate
    globalThis.moveSectionDown = () => {
        s.fullpageApi.moveSectionDown()
    }
    globalThis.moveSectionUp = () => {
        s.fullpageApi.moveSectionUp()
    }
    // let slates = [...Slates]
    // slates[0].props = {
    //     onChevPress: () => {
    //         s.fullpageApi.moveSectionDown()
    //     },
    // }

    return (
        <ReactFullpage.Wrapper>
            {Slates.map((s, i) => {
                return (
                    <Slate key={i}>
                        <s.content {...s.props} />
                    </Slate>
                )
            })}
        </ReactFullpage.Wrapper>
    )
}

export default FullPageContent

export const Slates = [
    {
        name: 'Landing',
        content: HomeSlateContent,
        props: {},
    },
    {
        name: 'Overview',
        content: OverviewSlateContent,
        props: {},
    },
    {
        name: 'About',
        content: AboutMeSlateContent,
        props: {},
    },
    {
        name: 'Software',
        content: HomeSlateContent,
        props: {},
    },
    {
        name: 'Video',
        content: HomeSlateContent,
        props: {},
    },
    {
        name: 'Design',
        content: HomeSlateContent,
        props: {},
    },
]
