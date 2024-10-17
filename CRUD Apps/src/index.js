const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers')

mongoose.connect('mongodb://127.0.0.1:27017/product', {useNewUrlParser: true, useUnifiedTopology: true});

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
})