import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {

  const [series, setSeries] = useState([
    {
      name: 'Sinacofi',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    },
    {
      name: 'Equifax',
      data: [10, 20, 15, 25, 19, 30, 40, 51, 65]
    },
    {
      name: 'TransUnion',
      data: [10, 20, 15, 25, 19, 30, 40, 51, 65].reverse()
    },
    {
      name: 'Siisa',
      data: [42, 30, 20, 10, 19, 33, 40, 32, 11].reverse()
    }
  ])

  const genRandomData = () => {
    return Array.from({ length: 9 }, () => Math.floor(Math.random() * 100))
  }

  useEffect(() => {
   const interval = setInterval(() => {
     setSeries([
      {
        name: 'Sinacofi',
        data: genRandomData()
      },
      {
        name: 'Equifax',
        data: genRandomData()
      },
      {
        name: 'TransUnion',
        data: genRandomData()
      },
      {
        name: 'Siisa',
        data: genRandomData()
      }
     ])
   }, 5000);
   
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        }}
        series={series}
        type="line"
        height={350}
      />
    </div>
  )
}

export default LineChart