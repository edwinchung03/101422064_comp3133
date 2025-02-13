const Movie = require('./models/Movie');

exports.resolvers = {
  Query: {
    getMovies: async (parent, args) => {
      console.log(`Fetching all movies`);

      return await Movie.find({})
    },
    getMovieById: async (parent, args) => {
      console.log(`Fetching Movie by Id: ${args.id}`)

      const movies = await Movie.find({id: new RegExp(args.id, 'i')})
      console.log(`Matching movies: ${JSON.stringify(movies)}`)

      return movies
    }
  },
  Mutation: {
    insertMovie: async (parent, args) => {
      console.log(`Trying to insert new movie`)

      let newMovie = new Movie({
        name: args.name,
        director_name: args.director_name,
        production_house: args.production_house,
        release_date: args.release_date,
        rating: args.rating
      })

      return await newMovie.save()
    },
    updateMovie: async (parent, args) => {
      if (!args.id){
        console.log(`ID not provided`)
        return JSON.stringify({
          status: false,
          "message": "Please provide Movie ID"
        })
      }

      console.log(`Trying to update movie with id: ${args.id}`)

      return await Movie.findOneAndUpdate(
        {_id: args.id},
        {
          $set: {
            name: args.name,
            director_name: args.director_name,
            production_house: args.production_house,
            release_date: args.release_date,
            rating: args.rating
          }
        },
        {new: false},
        (err, movie) => {
          if (err){
            console.log(`Could not update movie: ${JSON.stringify(err)}`);
          } else{
            console.log(`Movie info updated: ${JSON.stringify(movie)}`);
            return movie;
          }
        }
      )
    },
    deleteMovie: async (parent, args) => {
      if (!args.id){
        console.log(`ID not provided`)
        return JSON.stringify({
          status: false,
          "message": "Please provide Movie ID"
        })
      }

      console.log(`Trying to delete movie with id: ${args.id}`)

      return await Movie.findOneAndDelete(args.id);
    }
  }
}