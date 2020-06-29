import DateFnsUtils from '@date-io/date-fns'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import PropTypes from 'prop-types'
import React from 'react'

const FilterMenu = props => {
  const { open, onClose, onFilter } = props
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
    <Drawer anchor='left' open={open} onClose={onClose}>
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
    </Drawer>
  )
}

FilterMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onFilter: PropTypes.func
}

export default FilterMenu
