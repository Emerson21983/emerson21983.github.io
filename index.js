const express = require("express");
const app = express();
const request = require("request");
const async = require("async");

app.get("/upcoming", (req, res) => {
    async.times(2, (i, callback) => {
        var options = {
            url: "https://api.themoviedb.org/3/tv/popular?api_key=c506bd3c86908597cacfcde53a526ed3&language=en-US&page=1",
            qs: {
                "language": "en-US",
                "page": i+1
            },
        }
        request(options, (error, response, body) => {
            var result = JSON.parse(body);
            var data = result.results;
            callback(null, data);
        });
    }, (err, results) => {
        res.json(results);
    });
})

app.listen("8000", () => {
    console.log("Escuchando puerto 8000");
})