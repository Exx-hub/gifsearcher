import React from "react";

function Gifs({ results }) {
  return (
    <div>
      {results.map((item) => (
        <video
          autoPlay
          loop
          key={item.id}
          src={item.images.preview.mp4}
          alt=""
        />
      ))}
    </div>
  );
}

export default Gifs;
