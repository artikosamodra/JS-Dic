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

//untuk await
function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error('Tidak cukup uang'))
            }
            resolve(amount)
        }, 1000);
    });
}

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10) {
                reject(new Error('uang tidak cukup untuk membeli ticket'))
            }
            resolve('ticket-1')
        }, 1000);
    });
}

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error('tidak memiliki tiket'))
            }
            resolve('selamat menonton film')
        }, 1000);
    })
}


module.exports = { getUser, getWeather, withDrawMoney, buyCinemaTicket, goInsideCinema }; // inisial exports