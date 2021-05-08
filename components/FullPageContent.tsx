import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Slate from './Slate'
import HomeSlateContent from './SlateContent/1.HomeSlate'
import OverviewSlateContent from './SlateContent/2.Overview'
import AboutMeSlateContent from './SlateContent/3.AboutMe'

const FullPageContent = (s) => {
    // Adding the down chev functionality to the Landing slate
    let slates = [...Slates]
    slates[0].props = {
        onChevPress: () => {
            s.fullpageApi.moveSectionDown()
        },
    }

    return (
        <ReactFullpage.Wrapper>
            {slates.map((s, i) => {
                return (
                    <Slate>
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
