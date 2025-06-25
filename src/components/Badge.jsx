import React from "react";
import { Zap } from "lucide-react";

function Badge() {
  return (
    <div>
      <div className="flex gap-2 border-2 border-[#CDD5DC] bg-gray-200 px-6 py-2 rounded-xl cursor-pointer">
        <Zap color="black" />
        <p className="text-black">Trusted by 10,000+ businesses worldwide</p>
      </div>
    </div>
  );
}

export default Badge;
