
const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss');
const coords = {latitude: 43.9982, longitude: -79.4625};
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIp('173.35.225.43', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);

// });

// fetchISSFlyOverTimes(coords, (error, data)=> {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }
//   console.log('It worked!', data);
// });

const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = function(data) {
  for (const pass of data) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, data) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(data);
});