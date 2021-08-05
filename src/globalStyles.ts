import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        font-family: stratos, sans-serif;
    }
`

export default GlobalStyle
