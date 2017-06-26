// Helps with this problem:
// http://stackoverflow.com/questions/8059914/express-js-hbs-module-register-partials-from-hbs-file

function registerPartialsInFolder(handlebars,dir){
	const fs = require('fs');
	const path = require('path');

	const filenames = fs.readdirSync(dir);

	filenames.forEach(function(filename){
		const filePath = path.join(dir, filename);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()){
			registerPartialsInFolder(handlebars, filePath);
		} else {
			const matches = /^([^.]+).hbs$/.exec(filename);
			if (!matches) {
				return;
			}

			const name = matches[1];
			const template = fs.readFileSync(filePath, 'utf8');
			handlebars.registerPartial(name, template, filename);
		}
	});
};

module.exports = registerPartialsInFolder;
