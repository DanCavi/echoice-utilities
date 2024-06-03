import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const BarChart = () => {

  const [series, setSeries] = useState([
    {
      name: 'Bureau',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    },
    {
      name: 'Cache',
      data: [10, 20, 15, 25, 19, 30, 40, 51, 65]
    }
  ])

  const genRandomData = () => {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries([
        {
          name: 'Bureau',
          data: genRandomData()
        },
        {
          name: 'Cache',
          data: genRandomData()
        }
      ])
    }, 5000)
    return () => clearInterval(interval)
  }, [])



  return (
    <div>
      <Chart 
        options={{
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        }}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  )
}

export default BarChart