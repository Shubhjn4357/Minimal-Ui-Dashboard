import {useState,useEffect} from "react"
import Chart from "react-apexcharts";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { green ,red} from '@mui/material/colors';
const Charts=(props)=>{
 const [state,setState]=useState({
       options:{
        chart:{
          toolbar:{
            show:false
          },
          sparkline:{
            enabled:true,
          },
          width:'100%',
          height:'100%',
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors:'#85e7ff', // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
          }
        },
        dataLabels:{
          enabled:false,
        },
        labels:{
          enabled:false
        },
        legend:{
          show:false
        },
        grid:{
          show:false
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            colors: undefined,
            width: 2,
            dashArray: 0,      
        },
        yaxis:{
          labels:{
            show:false
          },
          
          axisTicks:{
            show:false
          },
          crosshairs:{
            show:false
          }
        
        },
        xaxis: {
          categories: [2015,2016,2017,2018,2019,2020, 2021, 2022],
          labels:{
            show:false
          },
          
          axisTicks:{
            show:false
          },
          crosshairs:{
            show:true
          }
        }
      },
      series: [
        {
          name:props.text,
          data: props.data
        }
      ]
 })
  const [Analytic,setAnalytic]=useState("")
    const calculatePercentage=(data)=>{
    return Math.round(Math.min(...data)/Math.max(...data)*100);
  }
  useEffect(()=>{
    if( props.data[props.data.length-1]>props.data[props.data.length-2]){
      return setAnalytic({profit:true,percentage:calculatePercentage(props.data)})
    }
    return setAnalytic({profit:false,percentage:calculatePercentage(props.data)})
  },[props.data])
 useEffect(()=>{
   const {text,data} =props
   setState({
     ...state,
     series: [
        {
          name:text,
          data:data
        }
      ]
   })
 },[props,state])


      
  return <Box className="p-2 rounded-3 shadow-sm d-flex align-items-center flex-column justify-content-around">
    <Typography variant="h6">{props.text}</Typography>

  <Stack direction="row" spacing={2}>
  <Stack direction="column" spacing={1}>
    <Stack direction="row" spacing={1}>
      <Typography color={Analytic.profit?green[200]:red[300]} variant="p">
      {Analytic.profit?<i className="text-success fa-solid fa-chart-line"></i>:
       <i className="text-danger fa-solid fa-chart-line"></i>}
      {Analytic.percentage}%{Analytic.profit?"+":"-"}
      </Typography>
    </Stack>
    <Typography variant="h5">{Math.max(...props.data)}</Typography>
  </Stack>
    <Chart options={state.options}
         series={state.series}
         type={props.type}
        />
  </Stack>
       </Box>
}
export default Charts;