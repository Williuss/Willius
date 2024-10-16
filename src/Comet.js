import React from "react";

const Comet = () => {
  const cometStyle = {
    top: `${Math.random() * 100}vh`,
    animationDuration: `${Math.random() * 3 + 2}s`, // Random duration for each comet
    animationDelay: `${Math.random() * 5}s`, // Random delay
  };

  return <div className="comet" style={cometStyle}></div>;
};

export default Comet;
