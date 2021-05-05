import React from 'react'
import { Box } from 'rebass'

interface ISlateProps {
    children?: React.ReactNode
}

const Slate = (p: ISlateProps) => {
    return (
        <Box
            className="section"
            style={{
                backgroundColor: '#131313',
                // background:
                //     'linear-gradient(315deg, rgb(0,0,0), rgb(38,38,38))',
                minHeight: '100vh',
            }}
        >
            {p.children}
        </Box>
    )
}

export default Slate
