const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) { //q= query
  if(error){
  callback(error, null)
    return 
  }

  const data = JSON.parse(body);

  if(data.length === 0) {
    callback("Breed was not found!!!", null)
    return 
  }
  
  callback(null, data);
  console.log(typeof data);
})
  
}



module.exports = { fetchBreedDescription };