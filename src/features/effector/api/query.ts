import { GRAPHQL_ENDPOINT } from '@constants/api'
import { graphql } from '@graphql'
import request from 'graphql-request'

export const effectorRequest = () =>
  request(
    GRAPHQL_ENDPOINT,
    graphql(`
      query effector {
        getCinemaToday {
          films {
            id
            name
            description
          }
        }
      }
    `)
  )
