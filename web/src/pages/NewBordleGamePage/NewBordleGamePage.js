import { Button, Stack, TextField } from '@mui/material'
import { useAuth } from '@redwoodjs/auth'
import { Form, FormError, useForm } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_BORDLE_GAME = gql`
  mutation CreateBordleGameMutation($input: CreateBordleGameInput!) {
    createBordleGame(input: $input) {
      id
    }
  }
`

function NewBordleGamePage() {
  const { currentUser } = useAuth()
  const [create, { loading, error }] = useMutation(CREATE_BORDLE_GAME)
  async function onSubmit(data) {
    const inputData = {
      playerOneName: currentUser.player.name,
      playerTwoName: data.playerTwoName,
      playerOneWord: data.playerOneWord,
      playerTwoWord: data.playerTwoWord,
    }
    const newGame = await create({ variables: { input: inputData } })
    navigate(routes.bordleGame({ id: newGame.data.createBordleGame.id }))
  }

  const formMethods = useForm({ mode: 'onBlur' })

  return (
    <>
      <MetaTags title="NewBordleGame" description="NewBordleGame page" />

      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <Stack>
          <FormError error={error} />
          <TextField
            {...formMethods.register('playerTwoName', { required: true })}
            label={'Player Two *'}
            variant="filled"
          ></TextField>
          <TextField
            {...formMethods.register('playerOneWord', { required: true })}
            label={'Word One *'}
            variant="filled"
          />
          <TextField
            {...formMethods.register('playerTwoWord', { required: true })}
            label={'Word Two *'}
            variant="filled"
          />
          <Button disabled={loading} type="submit">
            Save
          </Button>
        </Stack>
      </Form>
    </>
  )
}

export default NewBordleGamePage
