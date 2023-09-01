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