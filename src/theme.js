import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b2ff59'
      // main: '#c7ea46'
      // main: '#90caf9'
    },
    secondary: {
      main: '#e040fb'
      // main: '#ffd740'
      // main: '#f48fb1'
    }
  }
})

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
        backgroundColor: 'transparent',
        borderRadius: '0px'
      }
    }
  },
  zIndex: {
    modal: 2300,
    tooltip: 2500
  }
})

export { theme, darkTheme }
