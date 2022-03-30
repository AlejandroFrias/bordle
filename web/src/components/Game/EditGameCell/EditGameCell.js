import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import GameForm from 'src/components/Game/GameForm'

export const QUERY = gql`
  query EditGameById($id: Int!) {
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
const UPDATE_GAME_MUTATION = gql`
  mutation UpdateGameMutation($id: Int!, $input: UpdateGameInput!) {
    updateGame(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ game }) => {
  const [updateGame, { loading, error }] = useMutation(UPDATE_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('Game updated')
      navigate(routes.games())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      playerOneId: parseInt(input.playerOneId),
      playerTwoId: parseInt(input.playerTwoId),
    })
    updateGame({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Game {game.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GameForm game={game} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
