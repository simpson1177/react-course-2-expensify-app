//OBJECT DESTRUCTURING

/* const person = {
  name: "collin",
  age: 44,
  location: {
    city: "Calgary",
    temp: 15
  }
};

const { name = "Anonymous", age } = person;
const { city, temp: temperature } = person.location;
console.log(`${name} is ${age}`);

if (city && temperature) {
  console.log(`Its ${temperature} in ${city}`);
} */
/* 
const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "penguin"
  }
};

const { name: publisherName = "self Published" } = book.publisher;
if (publisherName) {
  console.log(publisherName);
} */

//ARRAY DESTRUCTURING

const address = ["122 Mahogany Center", "Calgary", "Alberta", "V1C2E4"];
const [, city, province] = address;

console.log(`You are in ${city} ${province}`);

const item = ["Coffee", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;
console.log(`a medium ${itemName} costs ${mediumPrice} `);
