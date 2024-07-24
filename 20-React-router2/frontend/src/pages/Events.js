import { Await, defer, json, useLoaderData } from "react-router";

import EventsList from "../components/EventsList";
import { Suspense, useState } from "react";

function EventsPage() {
  const { events } = useLoaderData(); // loader가 산출하는 최종 데이터를 받음
  // const events = data.events;

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <Suspense fallvack={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  // loader는 리액트 컴포넌트가 아님! 훅을 사용할 수 없음

  const response = await fetch("http://localhost:8081/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ mesage: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // const res = new Response("any data", { status: 201 });
    // return res;

    // return response;
    const resData = await response.json();
    return resData.events;
    // defer 단계가 있다면 파싱해줘야함
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
