const { gql } = require('apollo-server-express');

exports.typeDefs = gql `

    type Movie{
        id: ID!
        name: String!
        director_name: String!
        production_house: String!
        release_date: String!
        rating: Float!
    }
    
    type Query{
        getMovies : [ Movie ]
        getMovieById(id: ID!) : [ Movie ]
    }

    type Mutation{
        insertMovie(
            name: String!
            director_name: String!
            production_house: String!
            release_date: String!
            rating: Float!
        ) : Movie

        updateMovie(
            id: ID!
            name: String!
            director_name: String!
            production_house: String!
            release_date: String!
            rating: Float!
        ) : Movie

        deleteMovie(id: ID!) : Movie
    }
`