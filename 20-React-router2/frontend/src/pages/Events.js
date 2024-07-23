import { useLoaderData } from "react-router";

import EventsList from "../components/EventsList";
import { useState } from "react";

function EventsPage() {
  const data = useLoaderData(); // loader가 산출하는 최종 데이터를 받음
  const events = data.events;

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  // loader는 리액트 컴포넌트가 아님! 훅을 사용할 수 없음

  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    throw new Response(JSON.stringify({ mesage: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    // const resData = await response.json();
    // const res = new Response("any data", { status: 201 });
    // return res;

    return response;
  }
}
