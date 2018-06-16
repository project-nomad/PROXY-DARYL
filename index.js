const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

app.use('/listings/:listingId', express.static(path.join(__dirname, 'public')));

// for booking module port 3001

app.get('/listings/:listingId/booking/core', (req, res) => {
  res.redirect(`http://ec2-54-67-69-199.us-west-1.compute.amazonaws.com${req.url}`);
});

app.get('/listings/:listingId/booking/availability', (req, res) => {
  res.redirect(`http://ec2-54-67-69-199.us-west-1.compute.amazonaws.com${req.url}`);
});

app.get('/listings/:listingId/booking/pricing/', (req, res) => {
  res.redirect(`http://ec2-54-67-69-199.us-west-1.compute.amazonaws.com${req.url}`);
});

// for description stuff: port 3002

app.get('/listings/:listingId/overview', (req, res) => {
  res.redirect(`http://awslistingmodule-env.x9r2zr55dh.us-west-2.elasticbeanstalk.com${req.url}`);
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  res.redirect(`http://awslistingmodule-env.x9r2zr55dh.us-west-2.elasticbeanstalk.com${req.url}`);
});

// for reviews stuff: port 3003

app.get('/listings/:listingId/overviews', (req, res) => {
  res.redirect(`http://ec2-54-219-133-3.us-west-1.compute.amazonaws.com${req.url}`);
});

app.get('/listings/:listingId/reviews', (req, res) => {
  res.redirect(`http://ec2-54-219-133-3.us-west-1.compute.amazonaws.com${req.url}`);
});
// for carousel port 3004

app.get('/listings/:listingId/pictures', (req, res) => {
  res.redirect(`http://ec2-18-208-170-149.compute-1.amazonaws.com${req.url}`);
});


app.listen(port, () => {
  console.log('Listening of port 3000');
});
