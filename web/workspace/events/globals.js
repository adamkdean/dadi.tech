var Event = function (req, res, data, callback) {

  // Date and time to play with
  data.global.timestamp = new Date().getTime();

  // Url stuff
  data.global.protocol = req.protocol;
 
  // Fin
  callback();

}

module.exports = function (req, res, data, callback) {
  return new Event(req, res, data, callback)
};