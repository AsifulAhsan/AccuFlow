import React from "react";

import Badge from "./../Badge";

function Hero() {
  return (
    <div className="flex flex-col gap-4 mt-10 justify-center items-center min-h-80">
      <Badge />
      <div className="flex flex-col gap-3 mt-6">
        <h1 className="text-7xl text-center font-medium">Your Business.</h1>
        <h1 className="text-7xl text-center font-semibold text-[#223548]">
          Your Data.
        </h1>
        <h1 className="text-7xl text-center font-semibold text-[#33658A]">
          Your Future.
        </h1>
        <p className="text-center text-2xl mt-6">
          Own them all on the new ERP and Accounting platform
        </p>
      </div>
    </div>
  );
}

export default Hero;
