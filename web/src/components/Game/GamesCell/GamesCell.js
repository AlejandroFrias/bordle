import { Link, routes } from '@redwoodjs/router'

import Games from 'src/components/Game/Games'

export const QUERY = gql`
  query FindGames {
    games {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No games yet. '}
      <Link to={routes.newGame()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ games }) => {
  return <Games games={games} />
}
