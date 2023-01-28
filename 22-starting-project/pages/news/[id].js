import { useRouter } from "next/router";
const SomethingImportantPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default SomethingImportantPage;
