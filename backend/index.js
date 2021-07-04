var express = require('express');  
var admin = require('firebase-admin');
var app = express();  
var server = require('http').createServer(app);  
const totp = require("totp-generator");
const PORT = 5500;
var io = require('socket.io')(server);
var serviceAccount = require("./totp-generator.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://totp-generator-12baa-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = admin.firestore();
var datas =[]
const dataClient =[]

async function getdata() {
  const snapshot = await db.collection('auth').get()
   snapshot.docs.forEach(doc => {
    datas.push(doc.data())
  });
}

getdata()
function clientdata() {
  
  datas.forEach((e) => {
  let tempObject = e
  e.code = totp(e.key)
  dataClient.push(tempObject)
  })
  
}

io.on('connection', function(client) {
  console.log('Client connected...');
  io.emit('data', dataClient);
  
});







server.listen(PORT);

  

