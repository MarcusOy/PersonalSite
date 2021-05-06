import { Theme, ThemeUIContextValue, useThemeUI } from "theme-ui"

const makeTheme = <T extends Theme>(t: T) => t
export const theme = makeTheme({
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
        blue: '#2196F2',
        red: '#95190C',
        orange: '#FA8225',
        purple: '#801E87',
        green: '#0DBF00',
        pink: '#FF499E',
        inOrder: ['#2196F2', '#95190C', '#FA8225', '#801E87', '#0DBF00', '#FF499E']
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        body: 'Gotham, sans-serif',
        heading: 'Gotham',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 100,
        heading: 400,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    variants: {},
    text: {},
    buttons: {
        primary: {
            color: 'white',
            bg: 'primary',
        },
    },
})
export type ExactTheme = typeof theme

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
    theme: ExactTheme
  }
  export const useTheme = (useThemeUI as unknown) as () => ExactContextValue