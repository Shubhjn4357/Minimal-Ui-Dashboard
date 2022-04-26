import Charts from "./Charts.component"
import CircleChart from "./CircleChart.component"
import AreaChart from "./AreaChart.component"
import Card from "@mui/material/Card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import { green } from '@mui/material/colors';
import logo from "../assets/undraw_slider_re_ch7w.svg"

const DashboardPanel=()=>{
  const Active=[324, 466, 145, 250, 649, 670, 790, 813]
  const installed=[145, 838, 389, 165,65,720,220, 413]
  const download=[50, 268, 409, 378,829,29,192, 165]
  const Currentdownload=[30, 22, 10,52]
  const Areas=[{
              name: 'Asia',
              data: [31, 40, 28, 51, 42, 109, 100,150,75,125,230]
            }, {
              name: 'America',
              data: [11, 32, 45, 32, 34, 52, 41,221,70,50]
            }]
  return  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-md-8 my-1">
        <Card sx={{background:green[100]}} className="shadow-sm rounded-3 p-2">
          <CardContent className="d-center flex-wrap">
          <Stack direction="column" spacing={4} className="my-2 text-wrap">
            <Typography variant="h4" className="my-2">Welcome Back,<br/> Minimal Ui</Typography>
            <Typography variant="p">If You are Going To Use A passage of Lorem Ipsum,<br/> You Need To Be sure there isn't Anything</Typography>
          </Stack>
             <img src={logo} width="150" alt="logo"/>
          </CardContent>
          <CardActions>
             <Button className="my-2 rounded-3" color="success" variant="contained" size="small">Go Now</Button>
          </CardActions>
        </Card>

      </div>
      <div className="col-12 col-md-4 my-1">


            <div id="carouselExampleDark" className="carousel shadow-sm rounded-3  carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src="http://picsum.photos/id/1015/100?blur=2" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="http://picsum.photos/id/1041/100?blur=2" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="http://picsum.photos/id/1042/100?blur=2" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
 
      </div>
      <div className="col-12 col-md-4">
        <Charts type="line" data={Active} text="Total Active User"/>
      </div>
      <div className="col-12 col-md-4">
        <Charts type="line" data={installed} text="Total Installed" />
      </div>
      <div className="col-12 col-md-4">
        <Charts type="line" data={download} text="Total Download" />
      </div>
     <div className="row">
      <div className="col-12 col-md-4">
        <CircleChart data={Currentdownload} text="Current Download" />
      </div>
      <div className="col-12 col-md-8">
        <AreaChart  data={Areas} text="Area Installed" />
      </div>
    </div>
    </div>
  </div>
}
export default DashboardPanel;