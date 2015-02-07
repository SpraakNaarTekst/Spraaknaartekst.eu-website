var connect = require('connect');
var serveStatic = require('serve-static');
try {
	var app = connect();
	app.use(
	    serveStatic(__dirname + "/_site")
	);
	app.listen(8085);
	console.log("Listening on http://localhost:8085");
} catch(e) {
	console.log("Something went wrong", e);
}
