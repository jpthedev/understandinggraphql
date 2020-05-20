const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

var mongoDB = 'localhost - need to add';
mongoose.connect(mongoDB, { useNewUrlParser: true,  useUnifiedTopology: true }).then(
  () => { console.log('connection estabilished') },
  err => { console.log(err) }
);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => console.log(`listening on port no: ${PORT}`));