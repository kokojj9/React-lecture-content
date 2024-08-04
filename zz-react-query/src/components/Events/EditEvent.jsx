import {
  Link,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();
  const params = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000, 
    // loader로 가져온 정보의 캐쉬가 10초 이상 지났을 경우 내부적으로 실행하기 위해서 설정함
    // 설정해주지않으면 loader와 리액트쿼리 두개의 요청이 가게됨
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     // 리액트 쿼리에서 업데이트하려는 정보를 보내줌 실행된 mutate
  //     const newEvent = data.event;

  //     await queryClient.cancelQueries({ queryKey: ["events", params.id] });
  //     const previousEvent = queryClient.getQueryData(["events", params.id]);

  //     queryClient.setQueriesData(["events", params.id], newEvent);

  //     return { previousEvent: previousEvent };
  //   }, // mutate를 호출하는 즉시 실행되는 속성
  //   onError: (error, data, context) => {
  //     // 에러가 발생할 경우 위에서 return해준 previousData가 context에 담김
  //     queryClient.setQueryData(["events", params.id], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", params.id]);
  //   },
  // });

  function handleSubmit(formData) {
    // mutate({ id: params.id, event: formData });
    // navigate("../");
    submit(formData, { method: "PUT" }); // 액션함수를 트리거함
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  // if (isPending) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator />
  //     </div>
  //   );
  // }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again"
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okey
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  // loader는 파라미터객체를 매개변수로 받아서 사용할 수 있음
  queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);

  return redirect("../");
}
