import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import emptyCart from "./cart.png";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="cartOverview flex  items-center justify-between rounded-lg  bg-stone-900 px-6 py-4 text-white sm:px-10 md:px-12 lg:px-24"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
        <span className="text-sm tracking-wide text-gray-300 sm:text-base">
          {totalCartQuantity} {totalCartQuantity === 1 ? "pizza" : "pizzas"}
        </span>
        <span className="text-lg font-semibold text-white">
          {formatCurrency(totalCartPrice)}
        </span>
      </div>

      <Link to="/cart" className="group relative">
        <div className="rounded-full bg-white p-3 transition duration-300 ease-in-out hover:bg-orange-400">
          <img src={emptyCart} alt="Cart" className="h-6 w-6" />
        </div>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-md">
          {totalCartQuantity}
        </span>
      </Link>
    </div>
  );
}

export default CartOverview;
