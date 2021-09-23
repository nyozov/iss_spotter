
const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');
const coords = {latitude: 43.9982, longitude: -79.4625};
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIp('173.35.225.43', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned coordinates:', coordinates);

});

fetchISSFlyOverTimes(coords, (error, data)=> {
  if (error) {
    console.log("It didn't work", error);
    return;
  }
  console.log('It worked!', data);
});