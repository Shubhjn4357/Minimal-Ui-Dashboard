import {useState,useEffect} from "react"
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const AreaChart=(props)=>{
  const [selection,setSelection]=useState(2022)
  const [state,setState]=useState({
        series: props.data,
         options: {
              chart: {
                width:"100%",
                type: 'area',
                toolbar:{
                  show:false
                },
              },
              legend: {
                    position: 'top'
                  },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: [`${selection}-09-19T00:00:00.000Z`, 
                             `${selection}-09-19T01:30:00.000Z`, 
                             `${selection}-09-19T02:30:00.000Z`, 
                             `${selection}-09-19T03:30:00.000Z`, 
                             `${selection}-09-19T04:30:00.000Z`, 
                             `${selection}-09-19T05:30:00.000Z`, 
                             `${selection}-09-19T06:30:00.000Z`,
                             `${selection}-09-19T07:30:00.000Z`,
                             `${selection}-09-19T08:30:00.000Z`,
                             `${selection}-09-19T09:30:00.000Z`]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
  })
  useEffect(()=>{
   const {data} =props
   setState({
     ...state,
     series:data
   })
 },[props,state])

  return (  <Box className="p-2 rounded-3 shadow-sm d-flex align-items-center flex-column justify-content-around">
  <Stack direction="row" className="d-flex justify-content-between">
  <Typography variant="h6">{props.text}</Typography>
<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-small">Year</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={selection}
        label="Age"
        onChange={(e)=>setSelection(e.target.value)}
      >
        <MenuItem value={2019}>2019</MenuItem>
        <MenuItem value={2020}>2020</MenuItem>
        <MenuItem value={2021}>2021</MenuItem>
        <MenuItem value={2022}>2022</MenuItem>
      </Select>
    </FormControl>
  </Stack>
  <Stack direction="column" spacing={2}>
  <ReactApexChart options={state.options}
         series={state.series}
         type="area"
        />
 </Stack>
 </Box>)
}
export default AreaChart;