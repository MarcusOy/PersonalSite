import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'

interface ITextProps extends TextProps {}

const Paragraph = (p: ITextProps) => {
    return (
        <BaseText
            fontSize={[18, 18, 21, 21]}
            letterSpacing="normal"
            lineHeight="1.6em"
            fontFamily={'Gotham'}
            fontWeight={100}
            color="#E4E4E4"
            // as="p"
            {...p}
        />
    )
}

export default Paragraph
