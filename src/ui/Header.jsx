import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";
import pizzaLogo from "../assets/PizzaLogo.png";


function Header() {
  return (
    <header className="flex  items-center justify-between border-b bg-[#F37A1F] px-4 py-3">
      <Link to="/" className="flex items-center tracking-[5px]">
        <img src={pizzaLogo} alt="" className="h-12" />
        <p className=" rounded-r border-b-2 border-r-2 border-t-2 border-[#820300] py-1 pl-2 text-[#820300]">
          PIZZERIA
        </p>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
