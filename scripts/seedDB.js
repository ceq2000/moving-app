require('dotenv').config();
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const db = require("../models");

// This file empties the item and User collections and inserts the seeds below
// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/moving-app" );

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const demoUserSeed = [
  {
    role: "user",
    firstName: "Demo",
    lastName: "One",
    email: "demo1@email.com",
    username: 'demo1'
  },
  {
    role: "user",
    firstName: "Demo",
    lastName: "Two",
    email: "demo2@email.com",
    username: 'demo2'
  }
]

// Insert seeds from "Item" database collection. Reference: check connected file: './models/item.js'  //

const itemSeed = [
  {
    name: "Samsung TV",
    location: "Living Room",
    description: "Smart TV, 34 inches",
    purchaseDate: "09/27/18",
    purchasePrice: "$450",
    date: new Date(Date.now())
  },

  {
    name: "Samsung TV",
    location: "Living Room",
    description: "Smart TV, 34 inches",
    purchaseDate: "09/27/18",
    purchasePrice: "$450",
    date: new Date(Date.now())
  }

];

async function seed() {
  try {
    // clear DB
    await db.Book.remove({});
    await db.User.remove({});
    await db.Item.remove({});

    // add demo users
    const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUNDS, 10);
    const password = process.env.SEED_USER_PASSWORD;
    await Promise.all(demoUserSeed.map(async (it) => {
      it.passwordHash = await bcrypt.hash(password, saltRounds);
      return;
    }));

    const userSeedOp = await db.User.collection.insertMany(demoUserSeed);

    // put demoUser's ID on each book
    bookSeed.forEach((it, idx) => it.user = userSeedOp.insertedIds[idx % 2]);

    // add demo books to DB
    const bookSeedOp = await db.Book.collection.insertMany(bookSeed);
    console.log(`Inserted ${bookSeedOp.result.n} books.`);

    // put demoUser's ID on each item // ––––––––––––––––––––––––––––––––––––––––––––––––
    itemSeed.forEach((it, idx) => it.user = userSeedOp.insertedIds[idx % 2]);

    // add demo items to DB // ––––––––––––––––––––––––––––––––––––––––––––––––
    const itemSeedOp = await db.Item.collection.insertMany(itemSeed);
    console.log(`Inserted ${itemSeedOp.result.n} items.`);

    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
