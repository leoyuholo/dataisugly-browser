import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({})

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1'
    }
  },
  overrides: {
    MuiDialog: {
      paper: {
        backgroundColor: 'transparent'
      }
    }
  }
})

export { theme, darkTheme }
