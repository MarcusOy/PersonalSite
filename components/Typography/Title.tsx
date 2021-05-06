import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'

interface ITitleProps extends TextProps {
    children: React.ReactNode
}

const Title = (p: ITitleProps) => {
    return <BaseText fontSize={62} fontWeight="700" {...p} />
}

export default Title
