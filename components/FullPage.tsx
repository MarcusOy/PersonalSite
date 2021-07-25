import React from 'react'
import DataStore from '../data/DataStore'
import ReactFullpage from '@fullpage/react-fullpage'
import FullPageContent from './FullPageContent'
import { useMediaQuery } from '@material-ui/core'

interface IFullPageProps {
    sectionNames: string[]
}

const FullPage = (p: IFullPageProps) => {
    const isTabletOrMobile = useMediaQuery('(max-width:40em)')
    let iscrollOptions = {
        startY: -100,
        mouseWheelSpeed: isTabletOrMobile ? 5 : 20,
        disableMouse: !isTabletOrMobile,
        disablePointer: !isTabletOrMobile,
        disableTouch: !isTabletOrMobile,
    }

    return (
        <ReactFullpage
            scrollingSpeed={1000}
            scrollOverflow
            scrollOverflowOptions={iscrollOptions}
            navigation
            navigationPosition="right"
            anchors={p.sectionNames}
            navigationTooltips={p.sectionNames}
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
            render={FullPageContent}
        />
    )
}

export default FullPage
