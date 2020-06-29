import DateFnsUtils from '@date-io/date-fns'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import PropTypes from 'prop-types'
import React from 'react'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerFullWidth: {
    width: '100%',
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerPaperFullWidth: {
    width: '100%'
  },
  drawerContainer: {
    overflow: 'auto'
  }
}))

const FilterMenu = props => {
  const { isWide, open, onClose, onFilter, drawerProps } = props
  const classes = useStyles()

  const [filterState, setFilterState] = React.useState({
    // startDate: new Date('2012-11-23T00:00:00'),
    startDate: new Date('2020-05-30T00:00:00'),
    endDate: new Date()
  })

  const handleStartDateChange = (date) => {
    const filter = { ...filterState, startDate: date }
    setFilterState(filter)
    onFilter(filter)
  }

  const handleEndDateChange = (date) => {
    const filter = { ...filterState, endDate: date }
    setFilterState(filter)
    onFilter(filter)
  }

  return (
    <Drawer
      anchor={isWide ? 'left' : 'top'}
      variant={isWide ? 'permanent' : 'temporary'}
      open={isWide || open}
      onClose={onClose}
      className={isWide ? classes.drawer : classes.drawerFullWidth}
      classes={{ paper: isWide ? classes.drawerPaper : classes.drawerPaperFullWidth }}
      {...drawerProps}
    >
      {isWide && <Toolbar />}
      <div className={classes.drawerContainer}>
        <List>
          <ListItem>
            <Typography>Filter</Typography>
          </ListItem>
          <ListItem>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin='normal'
                id='date-picker-filter-menu-start-date'
                label='Date range from:'
                format='MM/dd/yyyy'
                value={filterState.startDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date range from'
                }}
              />
            </MuiPickersUtilsProvider>
          </ListItem>
          <ListItem>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin='normal'
                id='date-picker-filter-menu-end-date'
                label='Date range to:'
                format='MM/dd/yyyy'
                value={filterState.endDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date range to'
                }}
              />
            </MuiPickersUtilsProvider>
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

FilterMenu.propTypes = {
  isWide: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  drawerProps: PropTypes.object
}

export default FilterMenu
