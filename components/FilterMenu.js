import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { fromPairs, mapValues } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import config from '../src/config'
import DateRangeSlider from './FilterMenuWidgets/DateRangeSlider'
import SelectedTagTray from './FilterMenuWidgets/SelectedTagTray'
import TagTray from './FilterMenuWidgets/TagTray'

const drawerWidth = 340

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
    overflowX: 'hidden',
    overflowY: 'visible'
  }
}))

const FilterMenu = props => {
  const { isWide, open, labelOptions, onClose, onFilter, drawerProps } = props
  const classes = useStyles()

  let filter = {
    startDate: config.imageLists.dateRange[0],
    endDate: config.imageLists.dateRange[1],
    tags: fromPairs(labelOptions.map(category => [
      category.tag,
      fromPairs(category.options.map(tag => [tag, false]))
    ]))
  }

  const updateFilter = (newFilter) => {
    filter = { ...filter, ...newFilter }
    onFilter(filter)
  }

  const handleDateRangeChange = (newDateRange) => {
    const newDateRangeFilter = { startDate: newDateRange[0], endDate: newDateRange[1] }
    // console.log('filterMenu handleDateRangeChange', newDateRange.map(d => d.toISOString()))
    updateFilter({ ...newDateRangeFilter })
  }

  const [openState, setOpenState] = React.useState(
    fromPairs(labelOptions.map((category, i) => [category.tag, i === 0])))
  const handleListClick = (category) => (event) => {
    const newState = !openState[category.tag]
    const newOpenState = { ...mapValues(openState, state => false), [category.tag]: newState }
    setOpenState(newOpenState)
  }

  const [tagCnt, setTagCnt] = React.useState(0)
  const [tagState, setTagState] = React.useState(filter.tags)
  const handleTagClick = (category) => (tag) => {
    const newValue = !tagState[category.tag][tag]
    const newTagState = { ...tagState, [category.tag]: { ...tagState[category.tag], [tag]: newValue } }

    setTagState(newTagState)
    setTagCnt(tagCnt + (newValue ? 1 : -1))
    updateFilter({ tags: newTagState })
  }

  const handleTagDelete = (category, tag) => {
    const newTagState = { ...tagState, [category]: { ...tagState[category], [tag]: false } }

    setTagState(newTagState)
    setTagCnt(tagCnt - 1)
    updateFilter({ tags: newTagState })
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
            <Typography variant='h6'>Filter</Typography>
          </ListItem>
          <ListItem>
            <DateRangeSlider width={drawerWidth} dateRange={config.imageLists.dateRange} onChange={handleDateRangeChange} />
          </ListItem>
          {tagCnt <= 0 ? undefined : (
            <div>
              <ListItem>
                <ListItemText primary='Selected' />
              </ListItem>
              <SelectedTagTray tagState={tagState} onDelete={handleTagDelete} />
            </div>
          )}
          {labelOptions.map(category => (
            <div key={category.tag}>
              <ListItem button onClick={handleListClick(category)}>
                <ListItemText primary={category.name} />
                {openState[category.tag] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openState[category.tag]} timeout='auto' unmountOnExit>
                <TagTray tags={category.options} tagState={tagState[category.tag]} onClick={handleTagClick(category)} />
              </Collapse>
            </div>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

FilterMenu.propTypes = {
  isWide: PropTypes.bool,
  open: PropTypes.bool,
  labelOptions: PropTypes.array,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  drawerProps: PropTypes.object
}

export default FilterMenu
