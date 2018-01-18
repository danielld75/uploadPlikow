var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
	console.log("Rozpoczynami obsługę żądania upload.");
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write("Tytuł pliku: " + fields.title + '<br/>');
		response.write("received image: " + files.upload.name + '<br/>');
		response.write("<img src='/show' />");
		response.end();
	})
};
exports.welcome = function(request, response) {
	console.log("Rozpoczynam obsługę żądania welcome.");
	response.write("Witaj na stronie startowej!");
	response.end();
};
exports.error = function(request, response) {
	console.log("Nie wiem co robić.");
	response.write("404 :(	");
	response.end();
};
exports.welcome = function(request, response) {
	console.log("Rozpoczynam obsługę żądania welcome.");
	fs.readFile('templates/start.html', function(err, html) {
		response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
		response.write(html);
		response.end();
	});
};
exports.show = function(request, response) {
	fs.readFile("test.png", "binary", function(error, file) {
		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(file, "binary");
		response.end();
	});
};