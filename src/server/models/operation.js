import path from 'path';
import { fileURLToPath } from 'url';

import mongoose from 'mongoose';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@suavedb.m3wta.mongodb.net/SuaveDB?retryWrites=true&w=majority`;

const connect = () => {
  mongoose.connect(uri, {});
  console.log(`${__dirname}: Connected to database at ${uri}`);
}

export default { connect };

// const client = new MongoClient(uri, { 
//                                       useNewUrlParser: true, 
//                                       useUnifiedTopology: true,
//                                     });

// const person = client.connect(err => {
//     const collection = client.db("SuaveDB").collection("Person");
//     // const leader = {  minecraftName: "CokefishR7166",
//     //                   discordName: "Cokefish#6054",
//     //                   socialType: "reddit",
//     //                   socialName: "MinecartCataphract",
//     //                   ageGroup: "adult",
//     //                   info: "Filet"};
//     // collection.insertOne(leader, (err, res) =>    {
//     //     if(err) throw err;
//     //     console.log(`Collection ${collection.collectionName} has added record ${JSON.stringify(leader)}`);
//     // });

//     collection.find({}).toArray((err, res) => {
//       if(err) throw err;
//       console.log(`Mongoose`);
//       console.log(res);
//       // res.toJSON();
//       client.close();
//     });
//   });
