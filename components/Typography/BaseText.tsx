import React from 'react'
import { Text, TextProps } from 'rebass'

interface ITextProps extends TextProps {}

const BaseText = (p: ITextProps) => {
    return <Text color="white" fontFamily={'Gotham'} fontWeight={100} {...p} />
}

export default BaseText
