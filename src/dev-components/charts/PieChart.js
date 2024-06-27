import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const PieChart = () => {
  const [series, setSeries] = useState(generateRandomData())



  return (
    <div>
      <Chart 
        options={{
          chart: {
            id: 'storage'
          },
          labels: ['Used', 'Free'],
          theme: {
            monochrome: {
              enabled: true,
              shadeTo: 'light',
              shadeIntensity: 0.6
            }
          }
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