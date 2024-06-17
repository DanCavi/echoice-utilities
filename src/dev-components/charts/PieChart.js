import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const PieChart = () => {
  const [series, setSeries] = useState(generateRandomData())

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries(generateRandomData())
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
          colors: ['rgb(0, 143, 251)', '#ff4560'],
        }}
        series={series}
        type="pie"
        height={350}
        
      />
    </div>
  )
}

function generateRandomData() {
  return [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
}

export default PieChart