
let http = require('http');

let url = require('url');

let fs = require('fs');

let app = http.createServer();

app.listen(3000);

app.on('request', (req, res) => {

    console.log(req.url);

    console.log(url.parse(req.url, true));

    if(req.url == '/a') {

        fs.readFile('./index.html', (err, data) => {
            res.end(data);
        })

        // res.end('hello nodejs!');
    } else {
        console.log(req.url);
        // ./css/index.css
        fs.readFile('.' + req.url, (err, data) => {
            if(!err) {
                res.end(data);
            }
        });
    }
})