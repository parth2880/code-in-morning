// const zomatoUser = new Object()
// console.log(zomatoUser);

const zomatoUser = {}

zomatoUser.name = "John Doe";
zomatoUser.id = "1n3n244"
zomatoUser.isLoggedIn = false

// console.log(zomatoUser);

const regularUser = {
    email: 'sona@gmail.com',
    fullNmae: {
        userfullname: {
            'first name': 'Parth',
            'last name': 'Sharma'
        }
    }
}


// console.log(regularUser.fullNmae?.userfullname["first name"]); 

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

const obj3 = {obj1, obj2}
// console.log(obj3); // {1: 'a', 2: 'b', obj1: {...}, obj2: {...}}

const obj4 = {...obj1, ...obj2}
// console.log(obj4); //  {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
// console.log(Object.assign(obj1, obj2)) // same as above but without using spread operator
// console.log('Obj 1 :',obj1);
// console.log('Obj 2 :',obj2);
// console.log(obj5); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

const users = [
    { id: 1, username: 'John'},
    { id: 2, username: 'Jane'},
    { id: 3, username: 'Sara' },
]

users.map(user => console.log(user.username));

console.log(Object.keys(users));
console.log(Object.values(users));

console.log(users.hasOwnProperty('isLoggedIn'));
