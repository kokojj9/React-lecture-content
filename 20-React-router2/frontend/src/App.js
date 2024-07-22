// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/events/:eventId", element: <EventDetailPage /> },
  { path: "/events/new", element: <NewEventPage /> },
  // 리액트에서는 이렇게 지정해도 /new 의 url경로가 /:eventId로 읽히지 않고 우선도를 가짐
  { path: "events/:eventId/edit", element: <EditEventPage /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
