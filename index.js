
const { fetchMyIP, fetchCoordsByIp } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIp('173.35.225.43', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error)
    return;
  }
  console.log('It worked! Returned coordinates:', coordinates)

})