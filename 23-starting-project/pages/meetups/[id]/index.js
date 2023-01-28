import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../../components/meetups/MeetupDetail";

const DetailMeetupPage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups - {props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetail {...props.meetup} />
    </>
  );
};

export default DetailMeetupPage;

export const getStaticPaths = async () => {
  const uri =
    "mongodb+srv://hugo:NOpqCaChvhmKxuIA@cluster0.baijl.mongodb.net/meetups?retryWrites=true&w=majority";

  const client = await MongoClient.connect(uri);
  const collection = client.db().collection("meetups");
  const data = await collection.find({}, { _id: 1 }).toArray();

  const meetupPaths = data.map((meetup) => ({
    params: { id: meetup._id.toString() },
  }));

  client.close();

  return {
    paths: meetupPaths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const params = context.params;

  const uri =
    "mongodb+srv://hugo:NOpqCaChvhmKxuIA@cluster0.baijl.mongodb.net/meetups?retryWrites=true&w=majority";

  const client = await MongoClient.connect(uri);
  const collection = client.db().collection("meetups");
  const data = await collection.findOne({ _id: ObjectId(params.id) });
  client.close();

  return {
    props: {
      meetup: {
        id: params.id,
        image: data.image,
        title: data.title,
        address: data.address,
        description: data.description,
      },
    },
  };
};
