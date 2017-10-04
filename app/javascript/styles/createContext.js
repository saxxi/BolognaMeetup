import { create } from 'jss'
import { jss } from 'react-jss'
import { SheetsRegistry } from 'react-jss/lib/jss'
import { createMuiTheme } from 'material-ui/styles'
import { orange, green } from 'material-ui/colors'

import './app'

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: green,
  },
})

export const sheetsManager = new Map()

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  }
}
