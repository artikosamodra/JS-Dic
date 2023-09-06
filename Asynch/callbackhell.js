const { getUser, getWeather } = require('./utils');


function getUserWeather(userId, callback) {
    getUser(userId, (error, user) => {
        if (error) {
            callback(error, null);
        }

        getWeather(user.location, (error, weather) => {
            if (error) {
                callback(error, null);
            }

            callback(null, { ...user, ...weather });
        });
    });
}

getUserWeather(1, (error, userWeather) => {
    if (error) {
        console.log(error);
    }
    console.log(userWeather);
    /* output
    {
        id: 1,
        name: 'John Doe',
        location: 'Jakarta',
        weather: 'Sunny',
        temperature: 30
    }
    */
});

/*
function getUserWeather memanggil function getUser dari utils.js
- jika ID error/!id(bukan ID), maka akan callback error (User ID is required).
- jika berhasil, callback { id, name: 'John Doe', location: "Jakarta" } dengan delay 1000 (data ini berada di file utils.js)

Dilanjutkan memanggil/import getWeather dari utils.js
- jika location error / !location (tidak location), maka callback error ("Location is required")
- jika berhasil, callback { weather: "Sunny", temperature: 30 } dengan delay 1000 (data ini berada di file utils.js)
*/