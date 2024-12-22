const {MongoClient, ObjectId} = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connect(){
    await client.connect();
    console.log("connected");

    const db = client.db("mydb");
    const collection = db.collection("guests");
    console.log("database and collection created!");

    const guest = {name: "Hanna Peretz", partyOf: 2, allergies: "none"};
    await collection.insertOne(guest);
    console.log("guest added!")

    const guests = await collection.find().toArray();
    console.log(guests);

    const doug = await collection.find({name: "Douglas Netzel"}).toArray();
    console.log("Antal doug: " + doug.length);

    const firstGuest = guests[0];
    console.log("first guest: " + firstGuest.name);
    console.log("first guest: " + firstGuest._id);

    await client.close();
}

connect();

