import { useLoaderData } from "react-router";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // loader가 산출하는 최종 데이터를 받음
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
  } else {
    // const resData = await response.json();
    // const res = new Response("any data", { status: 201 });
    // return res;

    return response;
  }
}
