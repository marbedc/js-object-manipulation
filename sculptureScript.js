const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!

const sculptureListLengths = [];

sculptureList.forEach(sculpture => {
 
  const lengthObj = Object.assign(
    {}, 
    ...Object.keys(sculpture).map(key => ({ [key]: sculpture[key].length }))
  );
  sculptureListLengths.push(lengthObj);
});

console.log(sculptureListLengths[0]);
