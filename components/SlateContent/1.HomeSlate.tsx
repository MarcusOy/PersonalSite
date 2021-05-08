import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaDribbble,
    FaChevronDown,
    FaLinkedin,
} from 'react-icons/fa'
import { Box, Flex } from 'rebass'
import DataStore from '../../data/DataStore'
import { downChevAnimation, smIconAnimation } from '../Animations'
import { useTheme } from '../Theme'
import Title from '../Typography/Title'
import TextLoop from 'react-text-loop'

interface IHomeSlateContentProps {
    onChevPress?: () => void
}

const HomeSlateContent = (p: IHomeSlateContentProps) => {
    const currentIndex = DataStore.useState((s) => s.currentIndex)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

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
                            className="feature-icon hov-scale"
                            key={i}
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
                <span style={{ color: currentAccent }}>Marcus Orciuch</span>,
                <Box display={['none', 'none', 'block', 'block']}>
                    a{' '}
                    <TextLoop
                        delay={1000}
                        springConfig={{ stiffness: 180, damping: 8 }}
                    >
                        <span>Software Engineer</span>
                        <span>Videographer</span>
                        <span>Designer</span>
                        <span>Cybersecurity Student</span>
                    </TextLoop>
                    .
                </Box>
                <Box display={['block', 'block', 'none', 'none']}>
                    <TextLoop
                        delay={1000}
                        springConfig={{ stiffness: 180, damping: 8 }}
                    >
                        <span>
                            a Software
                            <br /> Engineer.
                        </span>
                        <span>a Videographer.</span>
                        <span>a Designer.</span>
                        <span>
                            a Cybersecurity
                            <br /> Student.
                        </span>
                    </TextLoop>
                </Box>
            </Title>

            {p.onChevPress != undefined && (
                <div {...downChevAnimation}>
                    <div
                        style={{
                            position: 'absolute',
                            top: 100,
                            left: 0,
                            right: 0,
                        }}
                    >
                        <FaChevronDown
                            className="feature-icon hov-scale"
                            onClick={p.onChevPress}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                margin: 'auto',
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default HomeSlateContent
