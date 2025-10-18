import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

function Deal() {
  return (
    <Link
      href={"/deal"}
      className="hidden lg:flex items-center gap-2.5 justify-end group"
    >
      <Zap className="w-6 h-6 text-orange-400 group-hover:text-red-400 " />
      <div className="flex flex-col">
        <h4 className="text-base font-bold text-white">Deal</h4>
        <p className="text-xs whitespace-nowrap">Special Deals</p>
      </div>
    </Link>
  );
}

export default Deal;
