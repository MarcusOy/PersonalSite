import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'

interface IHeadingProps extends TextProps {
    children: React.ReactNode
}

const Heading = (p: IHeadingProps) => {
    return <BaseText fontSize={[36, 36, 42, 42]} fontWeight="400" {...p} />
}

export default Heading
