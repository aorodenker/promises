/**
 * Implement these functions following the node style callback pattern
 * callback pattern
 *  The function expects a callback as the last argument
 *  The callback is invoked with (err, results)
 *
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      callback(err, data);
    } else {
      var lines = data.toString('utf-8').split('\n');
      callback(null, lines[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  //somehow check url here
  request(url, function(err, response) {
    if (err) {
      callback(err);
    } else {
      callback(err, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
