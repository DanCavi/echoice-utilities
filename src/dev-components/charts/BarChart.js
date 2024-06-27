import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { getRandomData } from 'dev-utils/functions'
import { BAR_SERIES } from 'dev-constants'

const CATEGORIES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const BarChart = ({ categories = CATEGORIES, series = BAR_SERIES }) => {

  const [internalSeries, setInternalSeries] = useState(series)



  return (
    <div>
      <Chart
        options={{
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories
          },
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.6
            }
          }
        }}
        series={internalSeries}
        type="bar"
        height={350}
      />
    </div>
  )
}

export default BarChart