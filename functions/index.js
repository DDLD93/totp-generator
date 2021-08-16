const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require("express");
const {firestore} = require('firebase-admin');
const cors = require('cors')
const app = express()
admin.initializeApp();



const accountSid = 'AC22c897d2280bd583e6c54d4fd1b6ce52'; 
const authToken = '15b50fee6551eb507614fda7989f4b09'; 
const client = require('twilio')(accountSid, authToken); 

app.listen(3002)
const db = admin.firestore().collection('trips')
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

exports.app = functions.https.onRequest(app);


// setting up new user firestore account database account on signUp
