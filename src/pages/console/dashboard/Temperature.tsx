import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import useStyles from "./style";

const Temperature: React.SFC<any> = () => {
  const classes = useStyles();
  
return (
    <>

     <Grid xs={4}>
        <Grid component={Paper} elevation={10} direction={"column"} id='box2'>

          <Grid item xs={12} style={{ minHeight: "50px" }}>
            <Typography variant="h6" style={{ color: 'blue' }}>Temperature</Typography>

          </Grid>

          <Grid   xs={12} style={{ marginTop: 20 }} >

            <Grid xs={6} item style={{float:'left',}}>
              <Typography variant="h2" >25 <span style={{verticalAlign:'super', fontSize:'15px',}}>0</span> C </Typography>
            </Grid>

            <Grid xs={3} item style={{float:'right',}}>
            
              <Button className={classes.roundButton}></Button>
             
              <Button className={classes.roundButtonYellow}></Button>
             
              <Button className={classes.roundButtonGreen}></Button>
            </Grid>

          </Grid>

        </Grid>

      </Grid>
    </>
  );
};

export default Temperature;
