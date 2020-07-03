import Slider from '@material-ui/core/Slider'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import * as dayjs from 'dayjs'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  slider: props => ({
    margin: '10px 20px 20px 20px',
    width: `${props.width - 100}px`
  })
}))

const PrettoSlider = withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    // color: '#52af77',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
}))(Slider)

const dateRangeValueText = (dateRange, value) => {
  return dayjs(dateRange[0]).add(value, 'month').format('YYYY-MMM')
}

const DateRangeTooltip = (props) => {
  const { children, open, value } = props

  const { dateRange, dateRangeValue, newValue } = value
  // const { dateRange, dateRangeValue, maxValue, minValue, newValue } = value

  let placement = 'bottom'
  if (newValue === dateRangeValue[1]) {
  // if (newValue === dateRangeValue[1] && (dateRangeValue[1] - dateRangeValue[0]) / (maxValue - minValue) < 0.4) {
    placement = 'top'
  }

  return (
    <Tooltip
      open={open}
      arrow
      placement={placement}
      title={dateRangeValueText(dateRange, newValue)}
      PopperProps={{
        disablePortal: true,
        modifiers: {
          preventOverflow: {
            boundariesElement: 'scrollParent',
            escapeWithReference: true
          }
        }
      }}
    >
      {children}
    </Tooltip>
  )
}

DateRangeTooltip.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired
}

const DateRangeSlider = props => {
  const { dates, dateRange, onChange } = props
  const classes = useStyles(props)

  const minValue = 0
  const maxValue = dayjs(dateRange[1]).diff(dateRange[0], 'month')

  const [dateRangeValue, setDateRangeValue] = React.useState([
    dayjs(dates[0]).diff(dateRange[0], 'month'),
    dayjs(dates[1]).diff(dateRange[0], 'month')
  ])

  const handleDateRangeChange = (event, newDateRangeValue) => {
    setDateRangeValue(newDateRangeValue)
    onChange([
      dayjs(dateRange[0]).add(newDateRangeValue[0], 'month').toDate(),
      dayjs(dateRange[0]).add(newDateRangeValue[1] + 1, 'month').subtract(1, 'second').toDate()
    ])
  }

  const dateRangeValueText = (value) => {
    return dayjs(dateRange[0]).add(value, 'month').format('YYYY-MMM')
  }

  // workaround for the flickering tooltips
  const localVarPasser = (value) => {
    return { dateRange, dateRangeValue, maxValue, minValue, newValue: value }
  }

  return (
    <PrettoSlider
      value={dateRangeValue}
      min={minValue}
      max={maxValue}
      onChange={handleDateRangeChange}
      valueLabelDisplay='on'
      ValueLabelComponent={DateRangeTooltip}
      valueLabelFormat={localVarPasser}
      aria-labelledby='range-slider'
      getAriaValueText={dateRangeValueText}
      className={classes.slider}
    />
  )
}

DateRangeSlider.propTypes = {
  dates: PropTypes.array,
  dateRange: PropTypes.array,
  onChange: PropTypes.func
}

export default DateRangeSlider
