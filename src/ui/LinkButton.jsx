import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const className =
    "p-3  text-black rounded-full bg-[#F7B21F] text-center font-semibold hover:bg-yellow-300";
  
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link
      to={to}
      className={className}
      style={{ boxShadow: "rgb(38, 57, 77) 0px 10px 30px -10px" }}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
