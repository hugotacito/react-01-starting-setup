import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const uri =
      "mongodb+srv://hugo:NOpqCaChvhmKxuIA@cluster0.baijl.mongodb.net/meetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri);
    const collection = client.db().collection("meetups");
    const result = await collection.insertOne(data);
    // perform actions on the collection object
    client.close();
    console.log(result);
    res.status(201).json({ message: "Meetup created successfully!" });
  }
  res.status(422);
};
export default handler;
