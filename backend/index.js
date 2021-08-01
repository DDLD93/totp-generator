var express = require('express');  
var admin = require('firebase-admin');
var app = express();  
var server = require('http').createServer(app);  
const totp = require("totp-generator");
const PORT = 5500;
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
var serviceAccount = require("./totp-generator.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://totp-generator-12baa-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = admin.firestore();
var datas =[]


async function getdata() {
  datas = []
  const snapshot = await db.collection('auth').get()
   snapshot.docs.map(doc => {
    return datas.push(doc.data())
  })
  clientdata()
}

function clientdata() {
  datas.map((e) => {
  let tempObject = e
  e.code = totp(e.key)
 return tempObject
  })
}













server.listen(PORT);

  

