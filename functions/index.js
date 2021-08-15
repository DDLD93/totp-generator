const functions = require("firebase-functions");
const totp = require("totp-generator");
const admin = require('firebase-admin');
const {uuid} = require('uuidv4')
admin.initializeApp();

// setting up new user firestore account database account on signUp
exports.newUserSignUp = functions.auth.user().onCreate(user => {
    // for background triggers you must return a value/promise
    return admin.firestore().collection('user-keys').doc(user.uid).set({
      email: user.email,
      upvotedOn: [],
    });
  });

  // listening for user token reqaust atfer
  exports.tokenRequest = functions.https.onCall(async(data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated', 
        'only authenticated users can token'
      );
    }
    const user = admin.firestore().collection('user-keys').doc(context.auth.uid);
    const doc = await user.get()
   
    const finalData = doc.data().map((e) => {
        let tempObject = e
        e.code = totp(e.key)
       return tempObject
    })
    
    return finalData
  });
// adding new keys
  exports.addKey = functions.https.onCall(async({formdata}, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated', 
        'only authenticated users can add keys'
      );
    }
    return admin.firestore().collection('user-keys').doc(context.auth.uid).add({
      id: uuid(),
      product: formdata.product ,
      user: formdata.user,
      key: formdata.key

    });
  })