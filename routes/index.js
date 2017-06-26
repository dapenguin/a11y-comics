var express = require('express');
var router = express.Router();

const newComics = require('../data/new-comics');
const backIssues = require('../data/back-issues');

/* GET home page. */
router.get('/', function(req, res, next) {
	const topNewComics = Object.assign({}, newComics);
	topNewComics.comics.splice(6);

	const topBackIssues = Object.assign({}, backIssues);
	topBackIssues.comics.splice(6);

	res.render('index',
		{
			title: 'Express',
			topNewComics: topNewComics,
			topBackIssues: topBackIssues
		}
	);
});

module.exports = router;
