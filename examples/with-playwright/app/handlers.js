import { rest, graphql, HttpResponse } from 'msw'

export const handlers = [
  rest.get('/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  graphql.query('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: 'The Lord of The Rings'
          },
          {
            title: 'The Matrix'
          },
          {
            title: 'Star Wars: Empire Strikes Back'
          }
        ]
      }
    })
  })
]
