import React from 'react'
import { Box } from 'rebass'
import { Albums } from '../../data/Albums'
import { Genres } from '../../data/Genres'
import HorizontalLineup from '../HorizontalLineup'
import Spacer from '../Spacer'
import {
    BodyHeading,
    BodyParagraph,
    BodyTitle,
} from '../Typography/BodyTypography'
import Heading from '../Typography/Heading'
import Title from '../Typography/Title'

const getYears = (date1, date2) => {
    let years = new Date(date1).getFullYear() - new Date(date2).getFullYear()
    let month = new Date(date1).getMonth() - new Date(date2).getMonth()
    let dateDiff = new Date(date1).getDay() - new Date(date2).getDay()
    if (dateDiff < 0) {
        month -= 1
    }
    if (month < 0) {
        years -= 1
    }
    return years
}

const AboutMeSlateContent = () => {
    return (
        <>
            <Spacer size={100} />
            <Box>
                <BodyTitle>🙌 About me</BodyTitle>
                <BodyParagraph>
                    Hi there, my name is Marcus Orciuch. I'm a{' '}
                    <b>{getYears(new Date(), new Date(2001, 5, 31))}</b> year
                    old software engineer from St. John, Indiana. I consider
                    myself as <b>a maker</b>: I continously have the drive to
                    create, whether it be through software development or video
                    production. When I'm not creating, I like to play soccer,
                    lift weights, meet new people, or play video games.
                </BodyParagraph>
                <BodyHeading>Who am I?</BodyHeading>
                <BodyParagraph>
                    The question of musical taste always seems to come up
                    whenever people meet for the first time. While writing the
                    content for this website, I realized how important it was in
                    my life, so I am dedicating a whole section to it. Below are
                    my favorite genres.
                </BodyParagraph>
                <BodyHeading type="h2">Genres</BodyHeading>
                <HorizontalLineup items={Genres} />
                <Spacer size={30} />
                <BodyParagraph>
                    I listen to music more often than when I don't. I think its
                    a great indicator of people's personalities. Below are some
                    of my favorite albums.
                </BodyParagraph>
                <BodyHeading type="h2">Albums</BodyHeading>
                <HorizontalLineup items={Albums} />
                <Spacer size={30} />
                <BodyParagraph>
                    My mind tends to think analytically and logically. Ever
                    since being immersed in the world of computing at an early
                    age, my impressionable self had come to realize that
                </BodyParagraph>
                <BodyParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sit amet luctus venenatis lectus. Etiam non quam
                    lacus suspendisse faucibus interdum posuere lorem. Consequat
                    semper viverra nam libero justo laoreet sit amet cursus.
                    Cursus sit amet dictum sit amet justo donec enim diam.
                    Aliquet enim tortor at auctor urna. Sit amet consectetur
                    adipiscing elit. Dictum non consectetur a erat nam at lectus
                    urna duis. Arcu risus quis varius quam quisque id diam. Elit
                    ut aliquam purus sit amet luctus venenatis lectus. Orci
                    phasellus egestas tellus rutrum tellus pellentesque eu
                    tincidunt tortor. Nulla pellentesque dignissim enim sit.
                    Tortor dignissim convallis aenean et tortor at risus viverra
                    adipiscing. Vel fringilla est ullamcorper eget nulla
                    facilisi. Quisque egestas diam in arcu cursus euismod quis
                    viverra. Aliquam eleifend mi in nulla. Augue eget arcu
                    dictum varius duis at consectetur. Proin nibh nisl
                    condimentum id venenatis a condimentum. Tincidunt tortor
                    aliquam nulla facilisi cras fermentum odio. Egestas congue
                    quisque egestas diam in arcu cursus.
                </BodyParagraph>
            </Box>
            <Spacer size={200} />
            <Box textAlign="center">
                <Heading>
                    Keep scrolling to advance to the next section...
                </Heading>
            </Box>
            <Spacer size={200} />
        </>
    )
}

export default AboutMeSlateContent
