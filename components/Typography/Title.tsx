import React from 'react'
import { Text, TextProps } from 'rebass'

interface ITitleProps extends TextProps {
    children: React.ReactNode
}

const Title = (p: ITitleProps) => {
    return <Text {...p} color="white" />
}

export default Title
