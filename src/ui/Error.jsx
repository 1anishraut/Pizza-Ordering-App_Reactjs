import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div className="mx-auto flex h-screen max-w-5xl flex-col items-center justify-center gap-5">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">
        <h1 className="px-2">Go back</h1>
      </LinkButton>
    </div>
  );
}

export default Error;
