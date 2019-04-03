import React from 'react';

function Pixel({data, size, pos}) {
  const color = data[pos.y * size.width + pos.x] ? "Pixel-red" : "Pixel-black";
  
  return (
    <div className={`Pixel ${color}`}></div>
  );
}

export default Pixel;
