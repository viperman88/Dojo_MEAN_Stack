// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:copy
var server = http.createServer(function(request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars/new") {
        fs.readFile('views/newCars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/bugatti-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/bugatti-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/bugatti-2.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/bugatti-2.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/bugatti-3.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/bugatti-3.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/zonda-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/zonda-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/zonda-2.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/zonda-2.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/zonda-3.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/zonda-3.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/lion-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/lion-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/tiger-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/tiger-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/cheetah-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cheetah-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/jaguar-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/jaguar-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/mountain-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/mountain-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/snow-leopard-1.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/snow-leopard-1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/css'
            });
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.end('<h1>File not found!!!</h1>');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
