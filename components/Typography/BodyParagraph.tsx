import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'

interface ITextProps extends TextProps {}

const BodyParagraph = (p: ITextProps) => {
    return (
        <p>
            <BaseText
                letterSpacing={1}
                lineHeight={1.5}
                fontFamily={'Gotham'}
                fontWeight={100}
                color="#E4E4E4"
                {...p}
            />
        </p>
    )
}

export default BodyParagraph
