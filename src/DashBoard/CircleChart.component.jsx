import {useState,useEffect} from "react"
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
const CircleChart=(props)=>{
  const [state,setState]=useState({
        series: [44, 55, 13, 43, 22],
        options: {
              chart: {
                width: 300,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
       
 })
  
 useEffect(()=>{
   const {data} =props
   setState({
     ...state,
     series:data
   })
 },[props,state])


      
  return <Box className="p-2 rounded-3 shadow-sm d-flex align-items-center flex-column justify-content-around">
    <Typography variant="h6">{props.text}</Typography>

  <Stack direction="row" spacing={2}>
      <ReactApexChart options={state.options} series={state.series} type="pie" width={300} />
  </Stack>
       </Box>
}
export default CircleChart;