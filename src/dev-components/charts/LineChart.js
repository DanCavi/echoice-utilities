import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { getRandomData } from 'dev-utils/functions'
import { MONTHS, LINE_SERIES } from 'dev-constants'

const LineChart = ({ categories = MONTHS, series = LINE_SERIES }) => {

  const [internalSeries, setInternalSeries] = useState(series)


  useEffect(() => {
    const interval = setInterval(() => {
      setInternalSeries(prevSerie => prevSerie.map(serie => ({ ...serie, data: getRandomData(categories.length) })))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Chart
        options={{
          chart: {
            id: 'consultas-hbes'
          },
          xaxis: {
            categories
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