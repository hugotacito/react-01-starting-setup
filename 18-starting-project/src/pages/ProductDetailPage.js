import { useParams, Link } from "react-router-dom";
const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Details for Product "{params.id}"</h1>
      <Link to="..">Back</Link>
    </>
  );
};
export default ProductDetailPage;
