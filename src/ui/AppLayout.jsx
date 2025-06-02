import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  // Get the loading state from the React router
  const isLoading = navigation.state === "loading";

  return (
    <>
      <div className="menuArea relative h-auto overflow-hidden ">
        {/* Show the loader if the router is loading */}
        {isLoading && <Loader />}
        <Header />

        <div className=" ">
          <CartOverview />

          <main className="menuArea bg-[#F37A1F]  text-[#820300]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
