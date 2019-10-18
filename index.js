var time = require('time');
exports.handler = (event , context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null,
        {
            statuscode: '200',
            body: 'The TIme in Los Angeles is :' + currentTime.toString();
        });
};
