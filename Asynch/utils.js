function getUser(id, callback) {
    setTimeout(() => {
        if (!id) {
            callback(new Error("User ID is required"), null);
        }

        callback(null, { id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
}

function getWeather(location, callback) {
    setTimeout(() => {
        if (!location) {
            callback(new Error("Location is required"), null);
        }

        callback(null, { weather: "Sunny", temperature: 30 });
    }, 1000);
}

module.exports = { getUser, getWeather };