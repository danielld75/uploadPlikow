var fs = require('fs');
var formidable = require('formidable');
var fileName = 'test.png';

exports.upload = function (request, response) {
  console.log("Rozpoczynami obsługę żądania upload.");
  var form = new formidable.IncomingForm();
  form.parse(request, function (err, fields, files) {
    if (err) throw err;
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write("Tytuł pliku: " + fields.title + '<br/>');
    fs.renameSync(files.upload.path, "test.png");
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  })
};
exports.welcome = function (request, response) {
  console.log("Rozpoczynam obsługę żądania welcome.");
  response.write("Witaj na stronie startowej!");
  response.end();
};
exports.error = function (request, response) {
  console.log("Nie wiem co robić.");
  response.write("404 :(	");
  response.end();
};
exports.welcome = function (request, response) {
  console.log("Rozpoczynam obsługę żądania welcome.");
  fs.readFile('templates/start.html', function (err, html) {
    if (err) throw err;
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write(html);
    response.end();
  });
};
exports.show = function (request, response) {
  fs.readFile(fileName, "binary", function (err, file) {
    if (err) throw err;
    response.writeHead(200, {"Content-Type": "image/png"});
    response.write(file, "binary");
    response.end();
  });
};