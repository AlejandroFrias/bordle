import { Button, Stack, TextField } from '@mui/material'
import { Form, FormError, useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_BORDLE_GAME = gql`
  mutation CreateBordleGameMutation($input: CreateBordleGameInput!) {
    createBordleGame(input: $input) {
      id
    }
  }
`

const NewBordleGamePage = () => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation(CREATE_BORDLE_GAME)
  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <>
      <MetaTags title="NewBordleGame" description="NewBordleGame page" />

      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <Stack>
          <FormError error={error} />
          <TextField
            {...formMethods.register('playerOneName', { required: true })}
            label={'Player One *'}
            variant="filled"
          ></TextField>
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
