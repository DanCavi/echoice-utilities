import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"

const ToggleButtons = ({
  values = ['1D', '1W', '1M', '1Y']
}) => {

  return values.map((value) => (
    <ToggleButton  value={value} key={value}
      sx={{
        '&.Mui-selected': {
          color: '#fff',
          backgroundColor: 'primary.main',
        },
        '&.Mui-selected:hover': {

          
          color: '#fff',
          backgroundColor: 'primary.main',
        },
        borderColor: 'primary.main',
      }}
    >
      {value}
    </ToggleButton>
  ))
}

const TogglePeriod = () => {

  const [period, setPeriod] = useState(localStorage.getItem('period') || '1D')

  const handlePeriodChange = (_, newPeriod) => {
    localStorage.setItem('period', newPeriod)
    setPeriod(newPeriod)
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={period}
      exclusive
      onChange={handlePeriodChange}
      sx={{ p: 2 }}
      children={ToggleButtons({ values: ['1D', '1W', '1M', '1Y'] })}
    />
  )
}
export default TogglePeriod