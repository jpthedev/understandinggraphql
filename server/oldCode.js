//connection to DB


// mongoose.Promise = global.Promise;

/* mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => { console.log('DB Connected....');},
    err => { console.log(err); }
  );
*/

/*
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  /*
    .then(() => console.log('Connected'))
  .catch(err => console.log('Caught', err)); */
/*
  let db = mongoose.connection;

  db.on('connected', () => {
    console.log('Mongoose connection open to url');
   });

db.on('open', () => {
    resolve();
    console.log('connected to the database');
});

db.on('error', function(err) {
    if(err) throw err;
  });

/*
mongoose.connection.once('open', () => {
    console.log('DB Connected....');
});*/

// const MongoClient = require('mongodb').MongoClient;
// require('dotenv').config({path: 'variables.env'});
// // replace the uri string with your connection string.
// 
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });


// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("books");
//   // perform actions on the collection object
//   console.log('***connected***');
//   console.log(collection);
//   client.close();
// });






/*
const axios = require('axios'); 
const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fileds: () => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_sucess: {type: GraphQLBoolean},
        rocket: {type: RocketType}
    })
});

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString}
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {    
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(response => response.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
*/