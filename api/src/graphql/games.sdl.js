export const schema = gql`
  type Game {
    id: Int!
    playerOne: Player!
    playerOneId: Int!
    playerTwo: Player!
    playerTwoId: Int!
    playerOneWord: String!
    playerTwoWord: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    games: [Game!]! @requireAuth
    game(id: Int!): Game @requireAuth
  }

  input CreateGameInput {
    playerOneId: Int!
    playerTwoId: Int!
    playerOneWord: String!
    playerTwoWord: String!
  }

  input UpdateGameInput {
    playerOneId: Int
    playerTwoId: Int
    playerOneWord: String
    playerTwoWord: String
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game! @requireAuth
    updateGame(id: Int!, input: UpdateGameInput!): Game! @requireAuth
    deleteGame(id: Int!): Game! @requireAuth
  }
`
