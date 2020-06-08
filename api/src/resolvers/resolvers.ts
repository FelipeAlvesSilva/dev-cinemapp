import axios from 'axios'

const BASE_URL: String = "http://www.omdbapi.com"
const API_KEY: String = "925eba28"

const resolvers = {
  Query: {

    getMovie: async (_, { movieTitle, page = 1 }) => {
      let requestURL = `${BASE_URL}/?apikey=${API_KEY}&s=${movieTitle}&page=${page}`
      return await axios.get(requestURL)
        .then(resp => resp.data.Search)
    },

    getPoster: (_, { posterURL }) => { }

  }
}

export default resolvers