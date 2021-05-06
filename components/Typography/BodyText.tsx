import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'

interface ITextProps extends TextProps {}

const BodyText = (p: ITextProps) => {
    return (
        <BaseText
            fontFamily={'Gotham'}
            fontWeight={100}
            color="#E4E4E4"
            {...p}
        />
    )
}

export default BodyText
