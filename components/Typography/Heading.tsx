import React from 'react'
import { TextProps } from 'rebass'
import BaseText from './BaseText'

export interface IHeadingProps extends TextProps {
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    children: React.ReactNode
}

const Heading = (p: IHeadingProps) => {
    const TComponent = <BaseText fontWeight="400" {...p} />
    switch (p.type) {
        case 'h2':
            return <h2>{TComponent}</h2>
        case 'h3':
            return <h3>{TComponent}</h3>
        case 'h4':
            return <h4>{TComponent}</h4>
        case 'h5':
            return <h5>{TComponent}</h5>
        default:
            return <h1>{TComponent}</h1>
    }
}

Heading.defaultProps = {
    type: 'h1',
}

export default Heading
