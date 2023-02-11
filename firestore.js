const { initializeApp , cert } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
var admin = require("firebase-admin");

var serviceAccount = require("./todolist-3916b-firebase-adminsdk-1mlnz-9ad3ca4a18.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;