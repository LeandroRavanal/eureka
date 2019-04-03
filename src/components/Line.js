import React from 'react';
import Pixel from './Pixel';

function Line({data, size, pos}) {
  const style = {
    width: size.width + "px",
    height: "1px",
  };
  
  let line = [];
  for (let posX=0; posX<size.width; posX++) {
    line.push(<Pixel key={`pixel_${pos.y}_${posX}`} data={data} size={size} pos={{ x:posX, y:pos.y }} />);
  }
  
  return (
    <div style={style}>{line}</div>
  );
}

export default Line;
