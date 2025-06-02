import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart, getUsername } from "./cartSlice";

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-auto h-screen max-w-5xl overflow-hidden px-4 py-6">
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-8 space-x-2">
        <Button type="primary" to="/order/new">
          Place Order
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          <p className="text-black">Clear cart</p>
        </Button>
      </div>
    </div>
  );
}

export default Cart;
