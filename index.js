const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const listings = require('./data/listings')
const categoriesList = require('./data/categories')



//const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(__dirname + '/data/photos'));


app.get('/listings', (req, res) => {

   res.send(listings)
  
  });

app.get('/categorieslist', (req, res) => {
  
  res.send(categoriesList)
    
  
  });



app.listen(port, () => console.log(`Server listening on port ${port}!`))
