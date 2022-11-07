const request = new XMLHttpRequest();
request.open("GET","json_data.json", false);
request.send(null);
const jsonData = JSON.parse(request.responseText);
// console.log(jsonData);

// const getFemale = jsonData.filter(item => item.gender === "Female")
// console.log(getFemale);


// const getMale = jsonData.filter(item => item.gender === "Male")
// console.log(getMale);

const getPolygenderMarried = jsonData.filter(item => item.gender === "Polygender" && item.married)
console.log(getPolygenderMarried);

const firstMan = jsonData.find(item => item.email.endsWith("plala.or.jp") && item.gender === "Male")

console.log(firstMan);

//local compare, de sortat json-u dupa firstname

const sortFirstMan = jsonData.sort((a, b) => { return a.first_name.localeCompare(b.first_name)})

console.log(sortFirstMan);


//10 operatii cu json

const bTownFilter = jsonData.filter(item => item.city.startsWith("B"));
console.log(bTownFilter);

const findHillary = jsonData.find(item => item.first_name === "Hillary");
console.log(findHillary);

const filterFemaleUnmarried = jsonData.filter(item => item.gender === "Female" && item.married === false)
console.log(filterFemaleUnmarried);

const sortCity = jsonData.sort((a , b) =>{ return a.city.localeCompare(b.city) })
console.log(sortCity);

const filterByEmail = jsonData.filter(item => item.email.startsWith("a") && item.email.endsWith(".com"))
console.log(filterByEmail);

const findLastNameInitials = jsonData.find(item => item.last_name.startsWith("Mc"))
console.log(findLastNameInitials);

const sortFilter = filterFemaleUnmarried.sort((a, b) => a.first_name.localeCompare(b.first_name));
console.log(sortFilter);

const findByGender = filterByEmail.find(item => item.gender === "Polygender")
console.log(findByGender);


