// Object Destructuring
//
// const person = {
//   name: 'James',
//   age: 26,
//   location: {
//     city: 'Dallas',
//     temp: 72
//   }
// }
//
// const { name: firstname = 'Anonymous', age } = person
//
// console.log(`${firstname} is ${age}.`);
//
// const { city, temp: temperature } = person.location
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Ememy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const { name: publishername = 'Self-Published'} = book.publisher
//
// console.log(publishername);

//
// Array Destructuring
//

// const address = ['213 Main St', 'Dallas', 'Texas', '75011']
//
// const [, city, state = 'New York'] = address
//
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [drink,,medium] = item

console.log(`A medium ${drink} cost ${medium}`);
