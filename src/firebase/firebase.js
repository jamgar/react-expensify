import * as firebase from 'firebase'

// I had to re-use a firebase db because had too many
// Used the ytgallery
// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// })
//
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//
//     console.log(expenses);
//   })
//
// database.ref('expenses').push({
//   description: 'Foo',
//   note: '',
//   amount: 4000,
//   createdAt: 3000
// })
//
// database.ref('notes/-LCTZiXvqzZjDKVf8wuL').remove()
//
// database.ref('notes/-LCTZiXvqzZjDKVf8wuL').update({
//   body: 'Buy food'
// })
//
// database.ref('notes').push({
//   title: 'Study Programmin',
//   body: 'React Native - Phone Apps'
// })
//
// const onValueChange = database.ref().on('value', (snapshot) => {
//   const result = snapshot.val()
//   const profile = `${result.name} is a ${result.job.title} at ${result.job.company}`
//   console.log(profile);
// }, (error) => {
//   console.log('Error with data fetching:', error);
// })
//
// setTimeout(() => {
//   database.ref('job/company').set('Google')
// }, 3000)
//
// // Subscribe to real time changes
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// })
//
// database.ref('age').set(30)
//
// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 6000)
//
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })
//
// database.ref().set({
//   name: 'James Garcia',
//   age: 46,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Dallas',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is save!');
// }).catch((error) => {
//   console.log('This failed!', error);
// })
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })
//
// // remove data by
// database.ref('isSingle').set(null)
//
// // or by explicitly calling remove, best practice
//
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((error) => {
//     console.log('Did not remove data', error);
//   })
