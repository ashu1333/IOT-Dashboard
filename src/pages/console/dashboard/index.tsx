import React from "react";
import Grid from "@material-ui/core/Grid";
import VacuumControl from "./VacuumControl";
import SerumSelection from "./SerumSelection";
import SerumFlowAndVolume from "./SerumFlow";
import Temperature from "./Temperature";
import FanControl from "./FanControl";
import Vortex from "./Vortex";

const DeviceConsole: React.SFC<any> = () => {
  return (
    <div id="container">
      <Grid container xs={12} direction={"row"} style={{ marginTop: 30 }}>
        <VacuumControl />
        <SerumSelection />
        <SerumFlowAndVolume />
      </Grid>

      <Grid container xs={12} direction={"row"} style={{ marginTop: 30 }}>
        <Temperature />
        <FanControl />
        <Vortex />
      </Grid>
    </div>
  );
};

export default DeviceConsole;
