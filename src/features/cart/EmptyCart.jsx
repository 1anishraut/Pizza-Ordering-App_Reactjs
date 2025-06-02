import LinkButton from "../../ui/LinkButton";
import emptyCart from "./empty cart.png";

function EmptyCart() {
  return (
    <div className="h-screen px-4 py-3 pt-12 lg:px-10">
      <LinkButton to="/menu">Back to Menu</LinkButton>

      <div
        className="rounded-2xl border px-2 py-10 bg-[#cecece8f]"
        style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
      >
        <div className=" flex flex-col items-center justify-center md:flex-row lg:gap-16 ">
          <div>
            <img src={emptyCart} alt="" className="h-[250px] lg:h-[300px]" />
          </div>
          <h2 className="mb-2 text-center text-xl font-semibold ">
            Your cart is feeling lonely...
          </h2>
        </div>

        <p className="text-md text-center text-gray-700">
          Let’s spice things up with some cheesy goodness! 🍕
          <br />
          Head back to the menu and pick your favorite slices.
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
