import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const PieChart = () => {

  const [series, setSeries] = useState([])

  const genRandomData = () => {
    return Array.from({ length: 2 }, () => Math.floor(Math.random() * 100))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries(genRandomData())
    }, 5000)

    return () => clearInterval(interval)
  }, [])



  return (
    <div>
      <Chart 
        options={{
          chart: {
            id: 'storage'
          },
          labels: ['Used', 'Free'],
        }}
        series={series}
        type="pie"
        height={350}
      />
    </div>
  )
}

export default PieChart