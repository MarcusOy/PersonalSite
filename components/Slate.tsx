import React from 'react'
import { Box, BoxProps } from 'rebass'

interface ISlateProps extends BoxProps {
    children?: React.ReactNode
}

const Slate = (p: ISlateProps) => {
    return (
        <Box
            className="section slate-out"
            px={50}
            backgroundColor="#131313"
            minHeight="100vh"
            style={{
                // transition: 'transform 0.6s cubic-bezier(0,.34,.4,.99), border-radius 0.6 cubic-bezier(1,0,1,0)',
                transitionDuration: '0.6s',
                transitionProperty: 'transform, border-radius',
                transitionTimingFunction: 'cubic-bezier(0,.34,.4,.99)',
            }}
            {...p}
        />
    )
}

export default Slate
