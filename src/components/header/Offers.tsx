import { Gift } from "lucide-react";
import Link from "next/link";
import React from "react";

const Offers = () => {
  return (
    <Link
      href={"/offers"}
      className="hidden lg:flex items-center gap-2.5 justify-end group"
    >
      <Gift className="w-6 h-6 text-orange-400 group-hover:text-red-400 " />
      <div className="flex flex-col">
        <h4 className="text-base font-bold text-white">Shop</h4>
        <p className="text-xs whitespace-nowrap">Latest Offers</p>
      </div>
    </Link>
  );
};

export default Offers;
