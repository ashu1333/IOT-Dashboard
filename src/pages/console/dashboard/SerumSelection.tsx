import React from "react";

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

const SerumSelection: React.SFC<any> = () => {
  const [progress, setProgress] = React.useState(10);

  const [serumState, setSerumState] = React.useState({
    serumA: false,
    serumB: false,
    serumC: false,
    serumD: false,
  });

  const [serumValueState, setSerumValueState] = React.useState({
    serumA: 10,
    serumB: 20,
    serumC: 25,
    serumD: 15,
  });

  const [serum1, setSerum1] = React.useState<number[]>([10, 30]);
  const [serum2, setSerum2] = React.useState<number[]>([56, 72]);
  const [serum3, setSerum3] = React.useState<number[]>([45, 59]);
  const [serum4, setSerum4] = React.useState<number[]>([7, 89]);

  const handleSerum1 = (event: any, newValue: number | number[]) => {
    setSerum1(newValue as number[]);
  };

  const handleSerum2 = (event: any, newValue: number | number[]) => {
    setSerum2(newValue as number[]);
  };

  const handleSerum3 = (event: any, newValue: number | number[]) => {
    setSerum3(newValue as number[]);
  };

  const handleSerum4 = (event: any, newValue: number | number[]) => {
    setSerum4(newValue as number[]);
  };
  const handleSerumActiveState = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSerumState({ ...serumState, [event.target.name]: event.target.checked });
  };

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

  return (
    <>
      <Grid xs={4}>
        <Grid component={Paper} elevation={10} direction={"column"} id="box1">
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{ color: "blue", marginBottom: "10px" }}
            >
              Serum Selection
            </Typography>
          </Grid>

          <Grid container xs={12} direction={"row"}>
            <Grid xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "red", borderRadius: "20px" }}
              >
                Serum1
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Switch
                checked={serumState.serumA}
                //  onChange={handleSerumActiveState}
                color="primary"
                name="serumA"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>

            <Grid xs={9}>
              <Slider
                value={serum1}
                onChange={handleSerum1}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                style={{ width: "100%", marginTop: "5px" }}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} direction="row">
            <Grid xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "green", borderRadius: "20px" }}
              >
                Serum2
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Switch
                checked={serumState.serumB}
                onChange={handleSerumActiveState}
                color="primary"
                name="serumB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>

            <Grid xs={9}>
              <Slider
                value={serum2}
                onChange={handleSerum2}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} direction="row">
            <Grid xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "red", borderRadius: "20px" }}
              >
                Serum3
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Switch
                checked={serumState.serumC}
                onChange={handleSerumActiveState}
                color="primary"
                name="serumC"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>

            <Grid xs={9}>
              <Slider
                value={serum3}
                onChange={handleSerum3}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid container xs={12} direction="row">
            <Grid xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "green", borderRadius: "20px" }}
              >
                Serum4
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Switch
                checked={serumState.serumD}
                onChange={handleSerumActiveState}
                color="primary"
                name="serumD"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>

            <Grid xs direction={"column"}>
              <Slider
                value={serum4}
                onChange={handleSerum4}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                style={{ width: "100%" }}
              />
              <Grid></Grid>
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            justify={"space-around"}
            direction={"row"}
            style={{ marginTop: 10 }}
          >
            <CircularProgressWithLabel value={progress} />
            <CircularProgressWithLabel value={progress} />
            <CircularProgressWithLabel value={progress} />
            <CircularProgressWithLabel value={progress} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SerumSelection;
