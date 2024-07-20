import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);
// 위 아래 두가지 방법중 어느것이든 개발자의 취향임
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // 인덱스 라우터로 변환 부모 경로를 입력하면 이 라우터가 작동 꼭 써야하는 건아님
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> }, // 콜론기호로 동적url을 만들 수 있음 어떠한 값이 들어가도 엘리먼트 컴포넌트를 띄워줌
      // path의 맨앞에 / 를 붙히면 절대경로, 없이 사용하면 상대경로로 자동으로 판단함
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
