import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box position="relative" display="inline-flex" style={{ height: "100px" }}>
      <CircularProgress variant="determinate" {...props} />

      <Typography>{"P"}</Typography>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function valuetext(value: number) {
  return `${value}°C`;
}

const VacuumControl: React.SFC<any> = () => {
  const [progress, setProgress] = useState(10);
  const [vacuumPumpState, setVacuumPumpState] = useState(false);
  const [vacuumPressureState] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleVacuumPumpState = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVacuumPumpState(event.target.checked);
  };

  // const handleVacuumPressureState = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  setVacuumPressureState(event.target.value);
  // };

  return (
    <>
      <Grid xs={4}>
        <Grid component={Paper} elevation={10} direction={"column"} id="box1">
          <Grid item xs={12} style={{ minHeight: "50px" }}>
            <Typography variant="h6" style={{ color: "blue" }}>
              Vacuum Control
            </Typography>
          </Grid>
          <Grid container xs={12} direction="row" style={{ marginTop: 10 }}>
            <Grid item xs={10}>
              <Typography>Vacuum Pump</Typography>
            </Grid>

            <Grid item xs={2}>
              <Switch
                checked={vacuumPumpState}
                onChange={handleVacuumPumpState}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>
          </Grid>

          <Grid item xs style={{ marginTop: 20 }}>
            <Typography>Vacuum Pressure</Typography>
            <Slider
              value={vacuumPressureState}
              // onChange={handleVacuumPressureState}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              style={{ width: "100%" }}
            />
          </Grid>
          <Typography style={{ marginTop: 20 }}>Vacuum Attachment</Typography>
          <Grid xs style={{ marginTop: 10 }}>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={{ width: "30%", marginRight: "6px" }}
            >
              Lymphatic
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={{ marginRight: "6px" }}
            >
              MultiplatFor
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Perk
            </Button>
          </Grid>

          <Typography style={{ marginTop: 20 }}>Get Sensed Vacuum</Typography>
          <Grid
            container
            xs={12}
            justify={"space-around"}
            style={{ marginTop: 10 }}
          >
            <br />
            <CircularProgressWithLabel value={progress} />

            <CircularProgressWithLabel value={progress} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default VacuumControl;
