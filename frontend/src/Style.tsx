import React from "react";

function TopBanner() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="company logo"></img>
        </div>

        <div className="col align-self-center text-start">
          <h1>Ryan's React Site</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
