import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../../components/meetups/MeetupList";

const ListMeetupPage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   return { props: { meetups: DUMMY_MEETUPS } };
// };

export const getStaticProps = async () => {
  const uri =
    "mongodb+srv://hugo:NOpqCaChvhmKxuIA@cluster0.baijl.mongodb.net/meetups?retryWrites=true&w=majority";

  const client = await MongoClient.connect(uri);
  const collection = client.db().collection("meetups");
  const data = await collection.find().toArray();
  const meetups = data.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    description: meetup.description,
    id: meetup._id.toString(),
  }));
  client.close();

  console.log(meetups);
  return { props: { meetups: meetups }, revalidate: 10 };
};

export default ListMeetupPage;
