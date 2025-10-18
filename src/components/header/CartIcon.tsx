import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartIcon() {
  return (
    <Link
      href={"/cart"}
      className="lg:flex items-center gap-2.5 justify-end group"
    >
      <span className="relative">
        <ShoppingBag className="size-5  group-hover:text-red-400  text-orange-400 lg:text-shadow-orange-400  lg:size-6  lg:group-hover:text-tech_white hoverEffect" />
        <span className="absolute -top-1 -right-1 bg-orange-400 text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          0
        </span>
      </span>
      <div className="flex flex-col">
        <h4 className="text-base font-bold text-white">Cart</h4>
        <p className="text-xs whitespace-nowrap">View cart</p>
      </div>
    </Link>
  );
}

export default CartIcon;
