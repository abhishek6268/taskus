const keyArray = ['firstName', 'lastName', 'address'];
const valueArray = ['Abc', 'xyz','Indore'];

let object = {};

for (let i = 0; i < keyArray.length; i++) { 
    object[keyArray[i]] = valueArray[i]; 
}

console.log(object);