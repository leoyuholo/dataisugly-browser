import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import * as dayjs from 'dayjs'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  slider: {
    width: '95%'
  }
}))

const DateRangeSlider = props => {
  const { dateRange, onChange } = props
  const classes = useStyles()

  const [dateRangeValue, setDateRangeValue] = React.useState([
    0,
    dayjs(dateRange[1]).diff(dateRange[0], 'month')
  ])

  const handleDateRangeChange = (event, newDateRangeValue) => {
    setDateRangeValue(newDateRangeValue)
    onChange([
      dayjs(dateRange[0]).add(newDateRangeValue[0], 'month').toDate(),
      dayjs(dateRange[0]).add(newDateRangeValue[1] + 1, 'month').subtract(1, 'second').toDate()
    ])
  }

  function dateRangeValueText (value) {
    return dayjs(dateRange[0]).add(value, 'month').format('YYYY-MM')
  }

  function ValueLabelComponent (props) {
    const { children, open, value } = props

    return (
      <Tooltip open={open} enterTouchDelay={0} placement='top' title={dateRangeValueText(value)}>
        {children}
      </Tooltip>
    )
  }

  return (
    <Slider
      value={dateRangeValue}
      onChange={handleDateRangeChange}
      valueLabelDisplay='auto'
      ValueLabelComponent={ValueLabelComponent}
      // valueLabelFormat={dateRangeValueText}
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
