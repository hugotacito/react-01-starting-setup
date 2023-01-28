import { useRouter } from "next/router";

const EditMeetupPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return <h1>Edit #{id}</h1>;
};
export default EditMeetupPage;
