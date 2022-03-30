export const schema = gql`
  type Player {
    id: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    playerOneGames: [Game]!
    playerTwoGames: [Game]!
  }

  type Query {
    players: [Player!]! @requireAuth
    player(id: Int!): Player @requireAuth
  }

  input CreatePlayerInput {
    name: String!
  }

  input UpdatePlayerInput {
    name: String
  }

  type Mutation {
    createPlayer(input: CreatePlayerInput!): Player! @requireAuth
    updatePlayer(id: Int!, input: UpdatePlayerInput!): Player! @requireAuth
    deletePlayer(id: Int!): Player! @requireAuth
  }
`
