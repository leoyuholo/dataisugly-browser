import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { debounce } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import config from '../src/config'
import DateRangeSlider from './FilterMenuWidgets/DateRangeSlider'

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
    startDate: new Date(config.imageLists.dateRange.startDate),
    endDate: new Date()
  })

  const handleDateRangeChange = debounce((newDateRange) => {
    const filter = { ...filterState, startDate: newDateRange[0], endDate: newDateRange[1] }
    setFilterState(filter)
    onFilter(filter)
    // console.log('filterMenu handleDateRangeChange', newDateRange.map(d => d.toISOString()))
  }, 1000)

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
            <Typography gutterBottom>
              Date
            </Typography>
          </ListItem>
          <ListItem>
            <DateRangeSlider dateRange={config.imageLists.dateRange} onChange={handleDateRangeChange} />
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
