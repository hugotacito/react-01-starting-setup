import { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Could not fetch details for selected event!" }, 500);
  } else {
    const responseData = await response.json();
    return responseData.event;
  }
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, 500);
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
};

export const loader = async ({ params }) => {
  return defer({ event: loadEvent(params.id), events: loadEvents() });
};

export const action = async ({ params, request }) => {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete selected event!" }, 500);
  } else {
    return redirect("/events");
  }
};
