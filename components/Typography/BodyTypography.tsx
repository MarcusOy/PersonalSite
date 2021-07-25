import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'
import Heading, { IHeadingProps } from './Heading'
import Paragraph from './Paragraph'
import Title from './Title'

interface ITextProps extends TextProps {}

const maxWidth = ['75%', '75%', '50%', '50%']
const paddingX = [20, 20, 50, 50]

export const BodyText = (p: ITextProps) => {
    return (
        <BaseText
            letterSpacing={1}
            lineHeight={1.5}
            fontFamily={'Gotham'}
            fontWeight={100}
            color="#E4E4E4"
            {...p}
        />
    )
}

export const BodyParagraph = (p: ITextProps) => {
    return (
        <p>
            <Paragraph px={paddingX} maxWidth={maxWidth} {...p} />
        </p>
    )
}

export const BodyHeading = (p: IHeadingProps) => {
    return (
        <p>
            <Heading px={paddingX} maxWidth={maxWidth} {...p} />
        </p>
    )
}

export const BodyTitle = (p: IHeadingProps) => {
    return (
        <p>
            <Title px={paddingX} maxWidth={maxWidth} {...p} />
        </p>
    )
}
