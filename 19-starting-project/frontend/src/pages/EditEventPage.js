import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const response = useRouteLoaderData("event-detail");
  return (
    <>
      <h1>Edit "{response.event.title}"</h1>
      <EventForm event={response.event} method="patch" />
    </>
  );
};
export default EditEventPage;
