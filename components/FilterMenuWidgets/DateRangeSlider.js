import Slider from '@material-ui/core/Slider'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import * as dayjs from 'dayjs'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  slider: {
    margin: '10px 20px 10px 20px',
    width: '95%'
  }
}))

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
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
})(Slider)

const DateRangeSlider = props => {
  const { dateRange, onChange } = props
  const classes = useStyles()

  const minValue = 0
  const maxValue = dayjs(dateRange[1]).diff(dateRange[0], 'month')

  const [dateRangeValue, setDateRangeValue] = React.useState([minValue, maxValue])

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

  const ValueLabelComponent = (props) => {
    const { children, open, value } = props

    let placement = 'bottom'
    if (value === dateRangeValue[1]) {
    // if (value === dateRangeValue[1] && (dateRangeValue[1] - dateRangeValue[0]) / (maxValue - minValue) < 0.4) {
      placement = 'top'
    }

    return (
      <Tooltip open={open} arrow placement={placement} title={dateRangeValueText(value)}>
        {children}
      </Tooltip>
    )
  }

  return (
    <PrettoSlider
      value={dateRangeValue}
      min={minValue}
      max={maxValue}
      onChange={handleDateRangeChange}
      valueLabelDisplay='on'
      ValueLabelComponent={ValueLabelComponent}
      aria-labelledby='range-slider'
      getAriaValueText={dateRangeValueText}
      className={classes.slider}
    />
  )
}

DateRangeSlider.propTypes = {
  dateRange: PropTypes.array,
  onChange: PropTypes.func
}

export default DateRangeSlider
