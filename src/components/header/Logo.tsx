import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function Logo({ className }: { className: string }) {
  return (
    <Link href="/">
      <Image
        src="/logo.png" // Path to your logo inside /public folder
        alt="ShopTech Logo"
        width={250} // Adjust width as needed
        height={60} // Adjust height as needed
        // className="bg-black rounded-bl-2xl rounded-tr-xl shadow-md"
        className={cn(
          "w-full rounded-bl-2xl rounded-tr-xl shadow-md mb-4",
          className
        )}
      />
    </Link>
  );
}

export default Logo;
