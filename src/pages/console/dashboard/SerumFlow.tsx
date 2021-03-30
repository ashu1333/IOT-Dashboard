import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ReactSpeedometer from "react-d3-speedometer";

const SerumFlow: React.SFC<any> = () => {
  return (
    <>
      <Grid xs={4}>
        <Grid component={Paper} elevation={10} direction={"column"} id="box1">
          <Grid item xs={12}>
            <Typography variant="h6" style={{ color: "blue" }}>
              Serum Flow And Volume
            </Typography>
          </Grid>

          <Grid container xs={12} direction="row" style={{ marginLeft: 10 }}>
            <div
              style={{
                width: "92%",
                float: "left",
                height: "180px",
                background: "#EFEFEF",
                border: "10px solid #ddd",
                margin: "10px 0 10px -5px",
                borderRadius: "10px",
              }}
            >
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

          <Grid container xs={12} direction="row"></Grid>

          <Grid xs={12} container direction="column">
            <Typography variant="h6" style={{ color: "blue" }}>
              Vacuum Error
            </Typography>

            <Grid direction={"row"}>
              <Typography style={{ paddingTop: "10px" }}>
                <img
                  alt="REd"
                  src="/src"
                  width="12%"
                  style={{ marginTop: "-5px", float: "right" }}
                />
                Vacuum Error is Wrong
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SerumFlow;
