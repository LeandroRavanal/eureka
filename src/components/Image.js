import React from 'react';
import Line from './Line';

function Image({data, size}) {
  let lines = [];
  for (let posY=0; posY<size.height; posY++) {
    lines.push(<Line key={`line_${posY}`} data={data} size={size} pos={{ x:null, y:posY }} />);
  }

  return (
    <div>{lines}</div>
  );
}

export default Image;
