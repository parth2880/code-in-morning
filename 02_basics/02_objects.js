// singleton
// object.create

// object literals
const name = Symbol ('key1')

const JsUser = {
    [name]: 'Parth',
    'full name': 'Parth Sharma',
    age: 18,
    email: 'parth@gmail.com',
    location: 'Manali',
    isLoggedIn: false,
}

// console.log(JsUser[name]); // Parth

// console.log(JsUser); //  Output all the properties of User

// console.log(JsUser["full name"]); //  Parth Sharma

// console.log(JsUser['email']); //  parth@gmail.com

// console.log('keys: ', Object.keys(JsUser)); //  ['full name', 'age', 'email', 'location', 'isLoggedIn']

// console.log( Object.keys(JsUser),Object.values(JsUser)); // 

// Object.freeze(JsUser)//  Making user object immutable

JsUser.age = 20

JsUser.location = 'Shimla'//  it will give error as we have made this property non-configurable

console.log(JsUser); 

JsUser.greetings = function() {
    console.log(`Hello ${this["full name"]}`);
}

console.log(JsUser.greetings); // [Function (anonymous)]
console.log(JsUser.greetings()); // hello JsUser


