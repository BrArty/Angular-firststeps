var http = require('http');

var request = require('request');

var express = require('express');

var fs = require('fs');

var app = express();

app.use(express.static('../templates/'));

app.get('/api', function (req, res) {
    request('http://185.89.242.156:8280/services/reference?username=topway&name=country&lang=uk',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var json = JSON.parse(body);
                var outputData = json.response.data;
                if (req.query.id) {
                    outputData = outputData.Country.filter(function (item) {
                        return req.query.id == item.id;
                    });
                }
                res.send(JSON.stringify(outputData));
            }
        });
});

app.listen(3000);