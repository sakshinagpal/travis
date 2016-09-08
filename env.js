console.log('@@@@@@@@@@@@@@@@@@@@@@@');
console.log(process.env.TEST);
var obj = JSON.parse(process.env.TEST);
console.log(obj["book1"]);
console.log(obj["book2"]);
