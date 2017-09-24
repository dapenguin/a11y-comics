var express = require('express');
var router = express.Router();

const newComics = require('../data/new-comics');
const backIssues = require('../data/back-issues');
const events = require('../data/events');

const a11yVersion = false;

/* GET home page. */
router.get('/', function(req, res, next) {
	const topNewComics = newComics.comics.slice(0, 4);
	const topBackIssues = backIssues.comics.slice(0, 4);
	const upcomingEvents = events.events.slice(0, 3);

	res.render('index',
		{
			title: 'The Comic Emporium',
			topNewComics: {
				comics: topNewComics
			},
			topBackIssues: {
				comics: topBackIssues
			},
			upcomingEvents: {
				events: upcomingEvents
			},
			a11y: a11yVersion
		}
	);
});

router.get('/new-comics', function(req, res, next) {
	const comics = Object.assign({}, newComics);

	res.render('plp',
		{
			title: 'This week\'s new comics',
			comics: comics,
			pageH1: "This week's new comic releases",
			a11y: a11yVersion
		}
	);
});

router.get('/back-issues', function(req, res, next) {
	const comics = Object.assign({}, backIssues);

	res.render('plp',
		{
			title: 'Back issues',
			comics: comics,
			pageH1: "Back issues",
			a11y: a11yVersion
		}
	);
});

module.exports = router;
