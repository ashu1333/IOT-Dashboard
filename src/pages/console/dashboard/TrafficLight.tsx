
import React, { useState, useEffect } from 'react';
import Light from './Light';

const lightDurations = [3000, 2000, 1000];

const TrafficLight = (props:any ) => {
  const [colorIndex, setColorIndex] = useState(props.initialValue);
  useEffect(() => {
    setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
  });

  return (
    <div id="trafficlight">
      <Light color="#f00" active={colorIndex === 0} />
      <Light color="#ff0" active={colorIndex === 2} />
      <Light color="#0c0" active={colorIndex === 1} />
    </div>
  );
};

export default TrafficLight;