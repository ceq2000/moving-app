//Need to confirm whether we need Firebase DB when usine storage
//to store our item images
// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDjGEppIYYUK2FAVnpNTTHnc-OxTKdAvrI",
//   authDomain: "moving-app-c7d6b.firebaseapp.com",
//   databaseURL: "https://moving-app-c7d6b.firebaseio.com",
//   projectId: "moving-app-c7d6b",
//   storageBucket: "moving-app-c7d6b.appspot.com",
//   messagingSenderId: "703762299093",
//   appId: "1:703762299093:web:ea629df46da44ccf0f0a5c",
//   measurementId: "G-185XJG4HT7"
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// console.log(database);



//Firebase storage location - no authentication - for dev only
// service firebase.storage {
//   match / b / { bucket } / o {
//     match / { allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }





// "Item" Collection structure model to be deployed in the Mongoose DB

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//reseeded DB ... now updated schema here...
const itemSchema = new Schema({
  room: { type: String, required: true },
  itemName: { type: String, required: true },
  modelNumber: { type: String, required: false },
  serialNumber: { type: String, required: false },
  description: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  purchasePrice: { type: String, required: true },
  purchaseLocation: { type: String, required: true },
  uploadImage: { type: String, required: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Schema.Types.Date, required: true }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
