import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  //tanstack은 직접 요청을 보내는게 아닌 요청 로직을 관리하는 라이브러리
  const { data, isPending, isError, error } = useQuery({
    // data에는 응답 데이터가 들어가게됨 isPending은 응답 중인지 아닌지
    // 리액트 쿼리는 동일한 요청을 실행하긴하지만 내부적으로 캐시처리를 하기 때문에 데이터를 즉시 불러옴
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 5000, // 5000을 입력했을경우 5초내에 다시 페이지에 접속해서 리액트 쿼리를 실행할 경우 요청되지않음,
    //gcTime: 1000 캐시 보관 기간을 설정할 수 있음
    // 위 기능들로 데이터를 보관하는 시간과 새요청을 전송하는 시기를 제어할 수 있음
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch events."}
      />
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

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
