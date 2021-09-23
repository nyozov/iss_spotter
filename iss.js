const request = require("request");


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      
      return callback(error, null);
      
      
    } if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    
    const ip = data.ip;
    callback(null, ip);
    
  });
};

const fetchCoordsByIp = function(string, callback){
  request(`https://freegeoip.app/json/${string}`, (error, response, body)=> {
    if (error) return callback(error, null)

    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching coordinates for IP`
      callback(Error(msg), null)
      return
    }
    const latitude = JSON.parse(body).latitude
    const longitude = JSON.parse(body).longitude
    callback(null, {latitude, longitude})

  })

}


module.exports = { fetchMyIP, fetchCoordsByIp };