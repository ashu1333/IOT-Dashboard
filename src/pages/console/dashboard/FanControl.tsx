import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import ReactSpeedometer from "react-d3-speedometer"



const FanControl: React.SFC<any> = () => {

  const [isFanOn, setFanOn] = React.useState(false);

  const handleFanState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFanOn(event.target.checked);
  };
  
 
return (
    <>

      <Grid xs={4}>
          <Grid component={Paper} elevation={10} direction={"column"} id='box2'>

          <Grid direction={"row"} xs={12} style={{ minHeight: "50px" }}>
            <Grid item xs={7}  style={{float:'left',}}>
              <Typography variant="h6" style={{ color: 'blue' }}>Fan Control</Typography>
            </Grid>

            <Grid item xs={3} style={{float:'right',}}>
              <Switch
                checked={isFanOn}
                onChange={handleFanState}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </Grid>

            <div style={{
              width: "92%",
              float:'left',
              height: "180px",
              background: "#EFEFEF",
              border: "10px solid #ddd",
              margin:'10px 0 10px -5px',
              borderRadius: "10px"
            }}>

              <ReactSpeedometer
                maxValue={220}
                value={120}
                needleColor="blue"
                startColor="green"
                segments={10}
                endColor="red"
              />
            </div>

          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FanControl;
