import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong";
  console.log(error);

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
};
export default ErrorPage;
