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
import keys from 'lodash/keys'
import pickBy from 'lodash/pickBy'
import PropTypes from 'prop-types'
import React from 'react'
import { isSubcategoryTag } from '../src/lib/tagHelper'
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
  const { isWide, open, labelTags, filteredImageCounts, onClose, onFilter, drawerProps } = props
  const classes = useStyles()

  const [filter, setFilter] = React.useState({})

  const updateFilter = (update) => {
    const newFilter = { ...filter, ...update }
    setFilter(newFilter)
    onFilter(newFilter)
  }

  const [openState, setOpenState] = React.useState({ [labelTags.categories[0].category]: true })
  const handleListClick = (category) => (event) => {
    const newState = !openState[category.category]
    const newOpenState = { ...openState, [category.category]: newState }
    setOpenState(newOpenState)
  }

  const [tagsCnt, setTagsCnt] = React.useState(0)
  const [subcatsCnt, setSubcatsCnt] = React.useState(0)
  const [subcatsTags, setSubcatsTags] = React.useState([])
  const [tagsState, setTagsState] = React.useState(filter)
  const handleTagClick = (tag) => {
    const newValue = !tagsState[tag.tag]
    const newTagsState = { ...tagsState, [tag.tag]: newValue }

    setTagsState(newTagsState)
    setTagsCnt(tagsCnt + (newValue ? 1 : -1))
    setSubcatsCnt(subcatsCnt + (isSubcategoryTag(tag.tag) ? (newValue ? 1 : -1) : 0))
    setSubcatsTags(keys(pickBy(newTagsState)).filter(isSubcategoryTag))
    updateFilter(newTagsState)
  }

  const handleTagDelete = (tag) => {
    const newTagsState = { ...tagsState, [tag.tag]: false }

    setTagsState(newTagsState)
    setTagsCnt(tagsCnt - 1)
    setSubcatsCnt(subcatsCnt + (isSubcategoryTag(tag.tag) ? -1 : 0))
    setSubcatsTags(keys(pickBy(newTagsState)).filter(isSubcategoryTag))
    updateFilter(newTagsState)
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
            {!isWide &&
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='close' onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>}
          </ListItem>
          {tagsCnt <= 0 ? undefined : (
            <div>
              <ListItem>
                <ListItemText primary='Selected' />
              </ListItem>
              <SelectedTagTray tagsState={tagsState} labelTags={labelTags} onDelete={handleTagDelete} />
            </div>
          )}
          {subcatsCnt <= 0 ? undefined : (
            <div>
              <ListItem>
                <ListItemText primary='Subcategories' />
              </ListItem>
              <GroupedTagTray
                groups={subcatsTags.map(s => labelTags.all[s])}
                tags={subcatsTags.map(s => labelTags.all[s].tags)}
                tagsState={tagsState}
                filteredImageCounts={filteredImageCounts}
                onClick={handleTagClick}
                onTagMouseEnter={handlePopoverOpen}
                onTagMouseLeave={handlePopoverClose}
              />
            </div>
          )}
          {labelTags.categories.map(category => (
            <div key={category.category}>
              <ListItem button onClick={handleListClick(category)}>
                <ListItemText primary={category.name} />
                {openState[category.category] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openState[category.category]} timeout='auto' unmountOnExit>
                <TagTray
                  {...category}
                  tagsState={tagsState}
                  filteredImageCounts={filteredImageCounts}
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
    tags: PropTypes.array,
    all: PropTypes.objectOf(PropTypes.shape({
      tag: PropTypes.string,
      category: PropTypes.string,
      subcategory: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      count: PropTypes.number
    }))
  }),
  filteredImageCounts: PropTypes.objectOf(PropTypes.number),
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  drawerProps: PropTypes.object
}

export default FilterMenu
