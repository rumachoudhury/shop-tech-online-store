import Container from "@/components/Container";
import Logo from "@/components/header/Logo";
import SearchBar from "./SearchBar";
import Offers from "./Offers";
import Deal from "./Deal";
import CartIcon from "./CartIcon";
import Account from "./Account";

// export default function Header() {
//   return (
//     <header className="bg-black text-white py-4 stycky top-0 ">
//       <Container className="flex items-center justify-between gap-5">
//         <div>
//           {/* Logo Image */}
//           <Logo className="w-60" />
//           {/* <p>Mobile menu</p> */}
//         </div>
//         <div className="flex items-center gap-5 lg:flex-1">
//           <SearchBar />
//           <Offers />
//           <Deal />
//           <CartIcon />
//           <Account />
//         </div>
//       </Container>
//     </header>
//   );
// }

// ----------

export default function Header() {
  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5">
        {/* Logo and mobile menu */}
        <div className="flex justify-between w-full sm:w-auto items-center">
          <Logo className="w-40 sm:w-60" />

          {/* Mobile menu icon */}
          {/* <div className="sm:hidden">
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          </div> */}
        </div>

        {/* Navigation items */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto mt-4 sm:mt-0">
          {/* Search bar */}
          <div className="w-full sm:w-auto">
            <SearchBar />
          </div>

          {/* Optional links, hidden on small screens */}
          <div className="hidden sm:block">
            <Offers />
          </div>
          <div className="hidden sm:block">
            <Deal />
          </div>

          {/* Always visible icons */}
          <div>
            <CartIcon />
          </div>
          <div>
            <Account />
          </div>
        </div>
      </Container>
    </header>
  );
}
