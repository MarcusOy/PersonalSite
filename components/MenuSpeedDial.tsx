import { Backdrop } from '@material-ui/core'
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab'
import React, { useEffect } from 'react'
import {
    FaBars,
    FaEnvelope,
    FaFeather,
    FaInstagram,
    FaTimes,
} from 'react-icons/fa'
import { Flex } from 'theme-ui'
import DataStore from '../data/DataStore'
import { speedDialDescAnimation } from './Animations'
import { useTheme } from './Theme'
import { BodyText } from './Typography/BodyTypography'

const MenuSpeedDial = () => {
    const { currentIndex, isMenuAccessedOnce } = DataStore.useState((s) => s)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    // SpeedDial stuff
    const [isSPOpen, setIsSPOpen] = React.useState(false)
    const actions = [
        {
            icon: <FaFeather />,
            name: 'Visit my blog',
            onClick: () => {
                window.open('https://blog.m.orciuch.org')
            },
        },
        {
            icon: <FaEnvelope />,
            name: 'Send me an Email',
            onClick: () => {
                window.open('mailto:marcus@orciuch.org')
            },
        },
        {
            icon: <FaInstagram />,
            name: 'Send me an Instagram DM',
            onClick: () => {
                window.open('https://instagram.com/m.orciuch')
            },
        },
    ]

    useEffect(() => {
        var navs = document.getElementsByClassName('fp-tooltip')
        for (let x = 0; x < navs.length; x++) {
            if (isSPOpen) {
                navs[x].classList.add('sp-open')
                continue
            }
            navs[x].classList.remove('sp-open')
        }
    }, [isSPOpen])

    return (
        <Flex
            style={{
                position: 'absolute',
                bottom: 50,
                right: 50,
            }}
        >
            {!isMenuAccessedOnce && (
                <Flex
                    {...speedDialDescAnimation}
                    style={{ flexDirection: 'column' }}
                >
                    <div style={{ flexGrow: 1 }} />
                    <BodyText textAlign="right" mx={10} mb={10}>
                        Reach me (and more) <br /> using this button.
                    </BodyText>
                </Flex>
            )}

            <Backdrop
                open={isSPOpen}
                style={{
                    zIndex: 10,
                }}
                onClick={() => {
                    setIsSPOpen(false)
                }}
            />
            <SpeedDial
                ariaLabel="Contact SpeedDial"
                icon={
                    <SpeedDialIcon
                        icon={<FaBars style={{ fontSize: 20 }} />}
                        openIcon={<FaTimes style={{ fontSize: 20 }} />}
                    />
                }
                onClick={() => {
                    setIsSPOpen(!isSPOpen)
                    DataStore.update((s) => {
                        s.isMenuAccessedOnce = true
                    })
                    window.localStorage.setItem('isMenuAccessedOnce', 'yes')
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
    )
}

export default MenuSpeedDial
