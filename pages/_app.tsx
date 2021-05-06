import React, { useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../components/Theme'
import './index.css'

import AOS from 'aos'
import '../public/fonts/fonts.css'
import './custom-aos.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
