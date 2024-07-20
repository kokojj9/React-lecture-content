import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  // useParams 로 url의 파람 객체의 값을 가져올 수 있음
  // /products/:productId로 url을 만들었으므로 {params.productId}로 가져옴
  return (
    <>
      <h1>Product details!</h1>
      <p>{params.productId}</p>
      <p><Link to='..' relative="path">Back</Link></p>
      {/* relative 속성으로 절대경로, 상대경로를 지정하여 라우터를 가동 시킬 수 있음 */}
    </>
  );
}

export default ProductDetailPage;
