import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaDribbble,
    FaChevronDown,
    FaLinkedin,
} from 'react-icons/fa'
import { Button, Flex } from 'rebass'
import DataStore from '../../data/DataStore'
import { downChevAnimation, smIconAnimation } from '../Animations'
import { useTheme } from '../Theme'
import Title from '../Typography/Title'
import TextLoop from 'react-text-loop'

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
                <br /> a{' '}
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
            </Title>

            <Button
                onClick={(_) => {
                    window.open('/Orciuch_Marcus_Resume.pdf', '_blank').focus()
                }}
                style={{
                    fontWeight: 'bold',
                    fontSize: 12,
                    marginTop: 20,
                    border: '2px solid transparent',
                    borderRadius: '10px',
                    background:
                        'linear-gradient(to right, #131313, #131313), linear-gradient(to right, #b92b27 , #1565C0)',
                    backgroundClip: 'padding-box, border-box',
                    backgroundOrigin: 'padding-box, border-box',
                }}
            >
                RESUME
            </Button>

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
                        className="hov-scale"
                        onClick={p.onChevPress}
                        style={{
                            ...iconcss,
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            margin: 'auto',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default HomeSlateContent
