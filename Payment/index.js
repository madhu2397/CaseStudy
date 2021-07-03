const express = require('express') 
const bodyparser = require('body-parser') 
const path = require('path') 
const app = express() 

var Publishable_Key = 'pk_test_51J8iZmSI27YZaWYOUCyXglXxgif5JXd4iPOwWUKsf8Pp0GJIf30FLZjGCAgJlObso91Fut1JLd3yKeYWhGMOLdgD00S4QTXAZT'
var Secret_Key = 'sk_test_51J8iZmSI27YZaWYO2ck2u66VisdRQld1Y0k6q2JsPYHYAOPI7Rm2YDLSpRpQL1AhxSkTXanCvs0NoOWVHWYphi1d00fp508mzR'

const stripe = require('stripe')(Secret_Key) 

const port = process.env.PORT || 1000 

app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

// View Engine Setup 
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'ejs') 

app.get('/', function(req, res){ 
	res.render('Home', { 
	key: Publishable_Key 
	}) 
}) 

app.post('/payment', function(req, res){ 

	stripe.customers.create({ 
		email: req.body.stripeEmail, 
		source: req.body.stripeToken, 
		name: 'Madhuri Gavade', 
		address: { 
			line1: 'A/P-Nesari', 
			postal_code: '416504', 
			city: 'Gadhinglaj', 
			state: 'Maharashtra', 
			country: 'India', 
		} 
	}) 
	.then((customer) => { 

		return stripe.charges.create({ 
			amount: 8000,	 // Charing Rs 25 
			description: 'Node-js Project', 
			currency: 'USD', 
			customer: customer.id 
		}); 
	}) 
	.then((charge) => { 
		res.send("Payment Success") // If no error occurs 
	}) 
	.catch((err) => { 
		res.send(err)	 // If some error occurs 
	}); 
}) 

app.listen(port, function(error){ 
	if(error) throw error;
	console.log(`Server created Successfully at ${port}`); 
}) 
