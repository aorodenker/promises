/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

var nodeStyle = require('./callbackReview.js');
var pluckFirstLineFromFileAsync = Promise.promisify(nodeStyle.pluckFirstLineFromFile);
var getStatusCodeAsync = Promise.promisify(nodeStyle.getStatusCode);

// This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFileAsync = function(filePath) {
//   //then, catch, resolve, return, reject
//   return new Promise(function(resolve, reject) {
//     fs.readFile(filePath, function (err, data) {
//       if (err) {
//         return reject(err);
//       } else {
//         var lines = data.toString('utf-8').split('\n');
//         return resolve(lines[0]);
//       }
//     });
//   });
// };

// pluckFirstLineFromFileAsync()
//   .then(data => console.log(lines[0]))
//   .catch(err => console.error(err));


// // This function should retrieve the status code of a GET request to `url`
// var getStatusCodeAsync = function(url) {
//   // request(url)
//   //err case
//   //pass case
//   return new Promise(function(resolve, reject) {
//     request(url, function(err, response) {
//       if (err) {
//         return reject(err);
//       } else {
//         return resolve(response.statusCode);
//       }
//     });
//   });
// };

//call func
//then
//catch
getStatusCodeAsync()
  .then(response => console.log(response.statusCode))
  .catch(err => console.error(err));

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
