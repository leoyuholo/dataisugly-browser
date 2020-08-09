import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import fromPairs from 'lodash/fromPairs'
import map from 'lodash/map'
import mapValues from 'lodash/mapValues'
import PropTypes from 'prop-types'
import React from 'react'
import config from '../src/config'
import DateRangeSlider from './FilterMenuWidgets/DateRangeSlider'
import GroupedTagTray from './FilterMenuWidgets/GroupedTagTray'
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
  },
  popover: {
    pointerEvents: 'none'
  },
  popoverPaper: {
    padding: theme.spacing(1)
  }
}))

const FilterMenu = props => {
  const { isWide, open, labelTags, onClose, onFilter, drawerProps } = props
  const classes = useStyles()

  const [filter, setFilter] = React.useState({
    startDate: config.imageLists.dateRange[0],
    endDate: config.imageLists.dateRange[1],
    tags: fromPairs(map(labelTags.tags, tag => [tag.tag, false]))
  })

  const updateFilter = (update) => {
    const newFilter = { ...filter, ...update }
    setFilter(newFilter)
    onFilter(newFilter)
  }

  const handleDateRangeChange = (newDateRange) => {
    const newDateRangeFilter = { startDate: newDateRange[0], endDate: newDateRange[1] }
    // console.log('filterMenu handleDateRangeChange', newDateRange.map(d => d.toISOString()))
    updateFilter({ ...newDateRangeFilter })
  }

  const [openState, setOpenState] = React.useState(
    fromPairs(labelTags.categories.map((category, i) => [category.category, i === 0])))
  const handleListClick = (category) => (event) => {
    const newState = !openState[category.category]
    const newOpenState = { ...mapValues(openState, state => false), [category.category]: newState }
    setOpenState(newOpenState)
  }

  const [tagsCnt, setTagsCnt] = React.useState(0)
  const [tagsState, setTagsState] = React.useState(filter.tags)
  const handleTagClick = (tag) => {
    const newValue = !tagsState[tag.tag]
    const newTagsState = { ...tagsState, [tag.tag]: newValue }

    setTagsState(newTagsState)
    setTagsCnt(tagsCnt + (newValue ? 1 : -1))
    updateFilter({ tags: newTagsState })
  }

  const handleTagDelete = (tag) => {
    const newTagsState = { ...tagsState, [tag.tag]: false }

    setTagsState(newTagsState)
    setTagsCnt(tagsCnt - 1)
    updateFilter({ tags: newTagsState })
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [popoverContent, setPopoverContent] = React.useState('')
  const handlePopoverOpen = (event, tag) => {
    setAnchorEl(event.currentTarget)
    setPopoverContent(tag.description || 'No description for ' + tag.name)
  }

  const handlePopoverClose = (event, tag) => {
    setAnchorEl(null)
    setPopoverContent('')
  }

  const popoverOpen = Boolean(anchorEl)

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
            <ListItemText variant='h6'>Filter</ListItemText>
            {!isWide &&
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='close' onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>}
          </ListItem>
          <ListItem>
            <DateRangeSlider width={drawerWidth} dates={[filter.startDate, filter.endDate]} dateRange={config.imageLists.dateRange} onChange={handleDateRangeChange} />
          </ListItem>
          {tagsCnt <= 0 ? undefined : (
            <div>
              <ListItem>
                <ListItemText primary='Selected' />
              </ListItem>
              <SelectedTagTray tagsState={tagsState} labelTags={labelTags} onDelete={handleTagDelete} />
            </div>
          )}
          {labelTags.categories.map(category => ({ category, Tag: category.subcategories.length > 0 ? GroupedTagTray : TagTray })).map(({ category, Tag }) => (
            <div key={category.category}>
              <ListItem button onClick={handleListClick(category)}>
                <ListItemText primary={category.name} />
                {openState[category.category] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openState[category.category]} timeout='auto' unmountOnExit>
                <Tag
                  tags={category.tags}
                  subcategories={category.subcategories}
                  tagsState={tagsState}
                  onClick={handleTagClick}
                  onTagMouseEnter={handlePopoverOpen}
                  onTagMouseLeave={handlePopoverClose}
                />
              </Collapse>
            </div>
          ))}
        </List>
        <Popover
          id='filter-menu-popover'
          className={classes.popover}
          classes={{ paper: classes.popoverPaper }}
          open={popoverOpen}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={handlePopoverClose}
          transitionDuration={0}
          disableRestoreFocus
        >
          <Typography>{popoverContent}</Typography>
        </Popover>
      </div>
    </Drawer>
  )
}

FilterMenu.propTypes = {
  isWide: PropTypes.bool,
  open: PropTypes.bool,
  labelTags: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string,
      name: PropTypes.string,
      subcategories: PropTypes.array,
      tags: PropTypes.array
    })),
    subcategories: PropTypes.array,
    tags: PropTypes.objectOf(PropTypes.shape({
      tag: PropTypes.string,
      category: PropTypes.string,
      subcategory: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      count: PropTypes.number
    }))
  }),
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  drawerProps: PropTypes.object
}

export default FilterMenu
