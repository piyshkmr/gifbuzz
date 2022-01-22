import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default Loader;
