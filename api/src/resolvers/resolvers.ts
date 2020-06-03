import fetch from 'node-fetch'

const BASE_URL: String = "http://www.omdbapi.com"
const API_KEY: String = "925eba28"

const resolvers = {
  Query: {
    getMovie: (_, { movieTitle }) => {
      let requestURL = `${BASE_URL}/?apikey=${API_KEY}=${movieTitle}`
      return fetch(requestURL)
        .then(resp => resp.json())
    },
    // getPoster: (_, { posterURL }) => { }
  }
}

export default resolvers