import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query BordleGamesQuery($playerId: Int!) {
    myCoolestBordleGames: myGames(playerId: $playerId) {
      id
      playerOne {
        name
      }
      playerTwo {
        name
      }
      playerOneWord
      playerTwoWord
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>
    <Link to={routes.newBordleGame()}>New Game</Link>
  </div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ myCoolestBordleGames }) => {
  return myCoolestBordleGames.map((bordleGame) => (
    <article key={bordleGame.id}>
      <header>
        <h2>
          <Link to={routes.bordleGame({ id: bordleGame.id })}>
            {bordleGame.playerOne['name']} VS {bordleGame.playerTwo['name']}
          </Link>
        </h2>
      </header>
    </article>
  ))
}
