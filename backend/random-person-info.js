const axios = require("axios");

function Person(fName, lName, picture) {
  this.fName = fName;
  this.lName = lName;
  this.picture = picture;
}

getRandomPerson = () => {
    axios.get("https://randomuser.me/api/", {})
    .then((response) => {
        const data = response.data.results[0];
        const fName = data.name.first;
        const lName = data.name.last;
        const picture = data.picture.large;

        const newPerson = new Person(fName, lName, picture);
        return newPerson;
    })
    .catch((err) => {
        console.log(err);
    });
}




