const express = require('express');

var app = express();

const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads
// app.use(cors());
app.use('/api', router);

const axios = require("axios");

// const foodpost = require('../models/modelpost');

// const fetch = require('node-fetch');

const { apiUrl, apiUsername, apiKey, apiPort } = require('./config');

router.use((request, response, next) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	// response.setHeader(
	//    "Access-Control-Allow-Methods",
	//    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
	// );
	// // response.setHeader("Access-Control-Allow-Headers", "Content-Type", "application/json");
	// response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	console.log('middleware');
	next();
 });

// app.get("/items", function(req, res) {
router.route('/goodbye').get((req, res) => {
	var username = req.query.Username;
	var pass = req.query.Password;
	var from = req.query.From;
	var to = req.query.To;
	var msg = req.query.Message;

	const params = {
		Username: username,
		Password: pass,
		From: from,
		To: to,
		Message: msg
	};
	
	axios.get(apiUrl, { params })
		.then(response => {
		console.log(response.data);
	})
		.catch(error => {
		console.log(error);
	});

	if(response = 'Message Sent Successfully!')
	{
		res.writeHead(200, {'content-type': 'text/plain'});
		// res.write('From: ' + req.query.From + '\n');
		// res.write('To: ' + req.query.To + '\n');
		// queryStuff = JSON.stringify(req.query);
		// res.end('That\'s all folks'  + '\n' + queryStuff);
		// res.end(JSON.stringify({"message":"OK","status":200}));
		res.end('OK');
	}

	// const queryParams = new URLSearchParams({
	// 	Username: username,
	// 	Password: pass,
	// 	From: from,
	// 	To: to,
	// 	Message: msg,
	// });

	// axios({
	// 	url: `https://exmaple.com.pk/sendsms_url.html?${queryParams}`,
	// 	method: "get",
	// })
	// .then(response => {
	// 	res.status(200).json(response.data);
	// })
	// .catch((err) => {
	// 	res.status(500).json({ message: err });
	// });

	// const get = async (url, params) => {
	// 	const data = await fetch(url + '?' + new URLSearchParams(params))
	// 	// const data = await response.json()
	
	// 	return data
	// }

	// Calling it with then:
	// get(apiUrl, {
	// 	Username: username,
	// 	Password: pass,
	// 	From: from,
	// 	To: to,
	// 	Message: msg,
	// }).then(data => console.log(data))

	// Call it with async:
	// (async () => {
	// 	const data = await get(apiUrl, {
	// 		Username: apiUsername,
	// 		Password: apiKey,
	// 		From: from,
	// 		To: to,
	// 		Message: msg,
	// 	})

	// 	console.log(data)
	// })()

	// // Calling it with then:
	// get(apiUrl, {
	// 	queryParams
	// }).then(data => console.log(data))

	// Calling it with then:
	// (async () => {
	// 	const response = await fetch('https://exmaple.com.pk/sendsms_url.html?' + new URLSearchParams({
	// 		Username: apiUsername,
	// 		Password: apiKey,
	// 		From: from,
	// 		To: to,
	// 		Message: msg,
	// 	}))

		// const queryParams = new URLSearchParams({
		// 	Username: apiUsername,
		// 	Password: apiKey,
		// 	From: from,
		// 	To: to,
		// 	Message: msg,
		// });
	
		// const url = `${apiUrl}?${queryParams}`;

		// console.log(url);

		// const response = await fetch(url);

	// 	const data = await response.json()

	// 	console.log(data)
	// })()

});

const port = apiPort || 8091

app.listen(port, () =>{
   console.log(`Jazz GoodBye SMS API is runnning at ${port}`);
});




