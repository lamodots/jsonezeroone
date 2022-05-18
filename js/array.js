//Javascript Array
//Creating Array
let array1 = new Array();
let array2 = [];
let participants = ["Lamo","Korede","Joshua"];

//Accessing Array Elemets

//You can access array elements by referring to the index number
let participant = participants[0];
let participant2 = participants[1];

console.log(participant);
console.log(participant2);

const countries = [];
countries[0] = "Nigeria";
countries[1] = "Kenya";
countries[2] = "Ghana";
countries[3] = "Zambia";
countries[0] = "USA";
countries[4] = "China";
countries[5] = "India";
countries[6] = "Zimbabuwe";
countries[7] = "Uganda";
console.log(countries);
// let len = countries.length;
// document.write(len);

//Accessing the Last Array element
//length of array minus 1
let last = countries[countries.length - 1];
// alert(last);
let list = "<ol>";
for (let x =0; x < countries.length; x++){
    list += "<li>" + countries[x] + "</li>";
}
list +="<ol>";
document.write(list);

const uni =["Futmx", "Uniport", "Uniben","Fuoye","Unilorin", "Delsu", "Unizik"];

let y = "<ol>";

for (let unilist of uni){
    y += "<li>" + unilist + "</li>";
}

y +="</ol>";
document.write(y);

for(let key in uni){
    document.write(uni[key]);
}

//ForEach loop
// array.forEach();
const fruits = ["Mango", "Plantain", "Pear", "Orange","Apple", "Banana"];
const myFunction = (k) => {
    ulist += "<li>" + k + "</li>";
}
let ulist = "<ul>";
fruits.forEach(myFunction);
ulist += "</ul>";
document.write(ulist);




