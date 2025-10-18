import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

function Account() {
  return (
    <Link
      href={"/account/account"}
      className="hidden lg:flex items-center gap-2.5 justify-end group"
    >
      <User className="size-6 text-orange-400 group-hover:text-red-400" />
      <div className="flex flex-col">
        <h4 className="text-base font-bold text-white">Account</h4>
        <p className="text-xs whitespace-nowrap">Login/Register</p>
      </div>
    </Link>
  );
}

export default Account;
