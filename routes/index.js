var express = require('express');
var router = express.Router();

const newComics = require('../data/new-comics');
const backIssues = require('../data/back-issues');
const events = require('../data/events');

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
			}
		}
	);
});

router.get('/new-comics', function(req, res, next) {
	const comics = Object.assign({}, newComics);

	res.render('plp',
		{
			title: 'This week\'s new comics',
			comics: comics,
			pageH1: "This week's new comic releases"
		}
	);
});

router.get('/back-issues', function(req, res, next) {
	const comics = Object.assign({}, backIssues);

	res.render('plp',
		{
			title: 'Back issues',
			comics: comics,
			pageH1: "Back issues"
		}
	);
});

module.exports = router;
