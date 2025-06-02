import { useSelector } from "react-redux";
import CreateUser from "../features/users/CreateUser";
import Button from "./Button";
import pizzaImage from "./our_story.jpg";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="relative h-screen w-screen flex flex-col-reverse bg-[#F37A1F] lg:flex-row">
      {/* Pizza Image Section */}
      <div className="flex h-1/2 items-center justify-center lg:h-full lg:w-1/2">
        <img
          src={pizzaImage}
          alt="Pizza"
          className="w-[80%] max-w-md lg:w-[90%]"
        />
      </div>

      {/* Text Content Section */}
      <div className="relative h-1/2 text-center text-white lg:h-full lg:w-1/2">
        <div className="absolute left-1/2 top-1/2  flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-10">
          <h1 className="text-2xl font-semibold md:text-3xl">
            The best{" "}
            <span className="rounded-br-md rounded-tl-md border border-[#F7B21F] px-1 text-2xl font-bold text-[#820300]">
              Homemade
            </span>{" "}
            pizza,
            <br />
            <span>
              With an Extra <br /> Pinch of{" "}
              <span className="rounded-br-md rounded-tl-md border border-[#F7B21F] px-1 text-2xl font-bold text-[#820300]">
                Love
              </span>
            </span>
          </h1>

          {username === "" ? (
            <CreateUser />
          ) : (
            <Button type="primary" to="/menu">
              Continue ordering, {username}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
