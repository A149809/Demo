<<<<<<< HEAD
var time = require('time');
exports.handler = (event , context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null,
        {
            statuscode: '200',
            body: 'The time in Los Angeles is :' + currentTime.toString();
        });
};
=======
var time = require('time');
exports.handler = (event , context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null,
        {
            statuscode: '200',
            body: 'The Time in Los Angeles is :' + currentTime.toString();
        });
};
>>>>>>> a38e8e7186ec071791410b347205fb936a52fb12
