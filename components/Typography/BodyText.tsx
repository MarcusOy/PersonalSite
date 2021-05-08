import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'

interface ITextProps extends TextProps {}

const BodyText = (p: ITextProps) => {
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

export default BodyText
