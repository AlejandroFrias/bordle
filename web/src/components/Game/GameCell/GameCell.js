import Game from 'src/components/Game/Game'

export const QUERY = gql`
  query FindGameById($id: Int!) {
    game: game(id: $id) {
      id
      playerOneId
      playerTwoId
      playerOneWord
      playerTwoWord
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Game not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ game }) => {
  return <Game game={game} />
}
