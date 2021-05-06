import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaYoutube,
    FaDribbble,
    FaChevronDown,
} from 'react-icons/fa'
import { Flex } from 'rebass'
import { smIconAnimation } from '../Animations'
import { useTheme } from '../Theme'
import Title from '../Typography/Title'

interface IHomeSlateContentProps {
    index: number
    onChevPress: () => void
}

const HomeSlateContent = (p: IHomeSlateContentProps) => {
    // ColorStuff
    const currentAccent = useTheme().theme.colors.inOrder[p.index]

    // Icon stuff
    const iconcss: React.CSSProperties = {
        fontSize: 40,
        color: 'white',
        marginRight: 30,
        cursor: 'pointer',
    }

    // Social Media Icons
    const smIcons = [FaGithub, FaInstagram, FaYoutube, FaDribbble]
    const smLinks = [
        'https://github.com/MarcusOy',
        'https://www.instagram.com/m.orciuch/',
        'https://www.youtube.com/channel/UC1mbZlDmGkDjvNkf00aJlnw',
        'https://dribbble.com/MarcusOy',
    ]

    return (
        <>
            <Flex>
                {smIcons.map((IconComponent, i) => (
                    <IconComponent
                        {...smIconAnimation}
                        data-aos-delay={200 * i}
                        key={i}
                        style={{ ...iconcss }}
                        onClick={() => {
                            window.open(smLinks[i])
                        }}
                    />
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

            <FaChevronDown
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
        </>
    )
}

export default HomeSlateContent
