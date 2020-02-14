const request = require('request');

const args = process.argv;

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`, (error, response, body) => { //q= query
  if(error){
    console.log("error", error)
    return
  }

  const data = JSON.parse(body);

  if(data.length === 0) {
    console.log("Breed was not found!!!")
    return 
  }
  
  console.log(data);
  console.log(typeof data);
})