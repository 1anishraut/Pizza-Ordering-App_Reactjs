import { useSelector } from "react-redux";
import profileLogo from "./account-circle-line.png";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="md:flex hidden items-center gap-2 text-sm font-semibold">
      <p>{username}</p>
      <img src={profileLogo} alt="" />
    </div>
  );
}

export default Username;
