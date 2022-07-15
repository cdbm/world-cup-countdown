var Twitter = require('twitter');

require('dotenv').config()

const copa = new Date('November 21, 2022 03:24:00');

var T = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

console.log("started")

function tweet(text) {

    T.post('statuses/update', { status: text }, function (error, tweet, response) {
        if (error) throw error;
        console.log("OK");
    });
}

setInterval(() => {
    let now = new Date();
    let diff = copa.getTime() - now.getTime();
    let TotalDays = Math.floor(diff / (1000 * 3600 * 24));
    let msg = ""

    if (TotalDays > 1) {
        msg = "Faltam " + TotalDays + " dias para a Copa do Mundo do Qatar";
    } else if (TotalDays == 1) {
        msg = "Falta " + TotalDays + " dia para a Copa do Mundo do Qatar";
    } else if (TotalDays == 0) {
        msg = "A Copa do Mundo do Qatar começa Hoje!!"
    }

    if (now.getHours() === 3 && now.getMinutes() === 20) {
        console.log(msg);
        tweet(msg);
    }

}, 60 * 1000)
