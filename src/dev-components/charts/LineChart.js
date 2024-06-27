import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { getRandomData } from 'dev-utils/functions'
import { MONTHS, LINE_SERIES } from 'dev-constants'


const LineChart = ({ categories = MONTHS, series = LINE_SERIES }) => {

  const [internalSeries, setInternalSeries] = useState(series)

  return (
    <div>
      <Chart
        options={{
          chart: {
            id: 'consultas-hbes'
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
        type="line"
        height={350}
      />
    </div>
  )
}

export default LineChart