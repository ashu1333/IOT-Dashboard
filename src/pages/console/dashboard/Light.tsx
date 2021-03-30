import React from "react";

const Light = (props:any) => (
  <div
    id="light"
    style={{ backgroundColor: props.color, opacity: props.active ? 1 : 0.4 }}
  />
);

export default Light;