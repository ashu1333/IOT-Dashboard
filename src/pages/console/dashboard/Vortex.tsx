import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";

const Vortex: React.SFC<any> = () => {
  const [vortexState, setVortexState] = React.useState(false);
  const handleVortexState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVortexState(event.target.checked);
  };
  return (
    <>
      <Grid xs={4}>
        <Grid component={Paper} elevation={10} direction={"column"} id="box2">
          <Grid item xs={12} style={{ minHeight: "0px" }}>
            <Typography variant="h6" style={{ color: "blue" }}>
              Vortex 2.0
            </Typography>
          </Grid>

          <Grid container xs={12} justify="space-between">
            <Grid item xs={9} style={{ float: "left" }}>
              <Typography>Start Vortex </Typography>
            </Grid>

            <Grid item xs={3} style={{ float: "right" }}>
              <Switch
                checked={vortexState}
                onChange={handleVortexState}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Vortex;
