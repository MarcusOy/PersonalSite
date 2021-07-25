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
import { smIconAnimation } from '../Animations'
import { useTheme } from '../Theme'
import Title from '../Typography/Title'
import TextLoop from 'react-text-loop'
import SectionArrow from '../SectionArrow'
import BlogLineup from '../BlogLineup'
import Spacer from '../Spacer'

interface IHomeSlateContentProps {
    onChevPress?: () => void
}

const HomeSlateContent = (p: IHomeSlateContentProps) => {
    const currentIndex = DataStore.useState((s) => s.currentIndex)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    const smIcons = [FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaDribbble]
    const smLinks = [
        'https://github.com/MarcusOy',
        'https://www.linkedin.com/in/marcus-orciuch-507215132/',
        'https://www.instagram.com/m.orciuch/',
        'https://www.youtube.com/channel/UC1mbZlDmGkDjvNkf00aJlnw',
        'https://dribbble.com/MarcusOy',
    ]

    return (
        <Box px={50}>
            <Flex flexDirection="column">
                <Box>
                    <Flex>
                        {smIcons.map((IconComponent, i) => (
                            <div
                                {...smIconAnimation}
                                key={i}
                                data-aos-delay={200 * i}
                            >
                                <IconComponent
                                    className="feature-icon hov-scale"
                                    onClick={() => {
                                        window.open(smLinks[i])
                                    }}
                                />
                            </div>
                        ))}
                    </Flex>
                    <Title
                        maxWidth={['100%', '100%', '70%', '70%']}
                        minHeight={308}
                        data-aos={'fade-up'}
                    >
                        👋 <span data-aos-offset={200}></span>Hi, I'm
                        <br />
                        <span style={{ color: currentAccent }}>
                            Marcus Orciuch
                        </span>
                        ,
                        <Box display={['none', 'none', 'block', 'block']}>
                            <TextLoop
                                delay={1000}
                                springConfig={{ stiffness: 180, damping: 8 }}
                            >
                                <span>
                                    a Software
                                    <br /> Engineer.
                                </span>
                                <span>
                                    a Video
                                    <br /> Producer.
                                </span>
                                <span>
                                    a UI/UX <br /> Designer.
                                </span>
                                <span>
                                    a Cybersecurity
                                    <br /> Student.
                                </span>
                            </TextLoop>
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
                                <span>
                                    a Video-
                                    <br />
                                    grapher.
                                </span>
                                <span>a Designer.</span>
                                <span>
                                    a Cyber-
                                    <br />
                                    security
                                    <br /> Student.
                                </span>
                            </TextLoop>
                        </Box>
                    </Title>
                </Box>
                <Spacer grow horizontal />
                <BlogLineup />
            </Flex>
            <SectionArrow />
        </Box>
    )
}

export default HomeSlateContent
