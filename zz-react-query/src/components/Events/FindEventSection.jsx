import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import EventItem from "./EventItem";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSerachTerm] = useState();

  const { data, isLoading, isError, error } = useQuery({
    // isPending,isLoading의 차이점
    // isLoading은 쿼리가 비활성화됐다고해서 enabeled가 true가 되지않음
    queryKey: ["events", { search: searchTerm }],
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
    enabled: searchTerm !== undefined, // 조건에 따라서 함수를 활성,비활성화할 수 있다
  });

  let content = <p>Please enter a search term and to find events.</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSerachTerm(searchElement.current.value);
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
