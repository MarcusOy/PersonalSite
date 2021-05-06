import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaDribbble,
    FaChevronDown,
    FaLinkedin,
} from 'react-icons/fa'
import { Flex } from 'rebass'
import DataStore from '../../data/DataStore'
import { downChevAnimation, smIconAnimation } from '../Animations'
import { useTheme } from '../Theme'
import Title from '../Typography/Title'

interface IHomeSlateContentProps {
    onChevPress: () => void
}

const HomeSlateContent = (p: IHomeSlateContentProps) => {
    const currentIndex = DataStore.useState((s) => s.currentIndex)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    // Icon stuff
    const iconcss: React.CSSProperties = {
        fontSize: 40,
        color: 'white',
        marginRight: 30,
        cursor: 'pointer',
    }

    // Social Media Icons
    const smIcons = [FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDribbble]
    const smLinks = [
        'https://github.com/MarcusOy',
        'https://www.linkedin.com/in/marcus-orciuch-507215132/',
        'https://www.instagram.com/m.orciuch/',
        'https://www.youtube.com/channel/UC1mbZlDmGkDjvNkf00aJlnw',
        'https://dribbble.com/MarcusOy',
    ]

    return (
        <>
            <Flex>
                {smIcons.map((IconComponent, i) => (
                    <div {...smIconAnimation} data-aos-delay={200 * i}>
                        <IconComponent
                            className="hov-scale"
                            key={i}
                            style={{ ...iconcss }}
                            onClick={() => {
                                window.open(smLinks[i])
                            }}
                        />
                    </div>
                ))}
            </Flex>
            <Title
                maxWidth={['100%', '100%', '70%', '70%']}
                data-aos={'fade-up'}
            >
                👋 <span data-aos-offset={200}></span>Hi, I'm
                <br />
                <span style={{ color: currentAccent }}>Marcus Orciuch</span>
                ,
                <br /> a Software Engineer.
            </Title>

            <div
                {...downChevAnimation}
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                }}
            >
                <FaChevronDown
                    // className="hov-scale"
                    onClick={p.onChevPress}
                    style={{
                        ...iconcss,
                        position: 'absolute',
                        bottom: 50,
                        left: 0,
                        right: 0,
                        margin: 'auto',
                    }}
                />
            </div>
        </>
    )
}

export default HomeSlateContent
