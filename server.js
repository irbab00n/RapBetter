const express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connection;
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();


//This line will need to be updated at deployment
mongoose.connect('mongodb://localhost/rapbetter');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected!')
});

module.exports.rhymeSchema = mongoose.Schema ({
  coreWord: {type: String, unique: true}, 
  rhymeSet: Array
})

const {getRhymes} = require('./populateWords.js')
const {getDatamuseRhymes, Rhymeset} = require('./datamuseWordPopulation.js')

 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
 

app.get('/getRhyme', (req, res) =>{
  Rhymeset.aggregate(
   [ { $sample: { size: 1 } } ])
  .then((data)=>{
    console.log(data);
    res.send(data);
  })
})


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

//getDatamuseRhymes('how')