import { Button, Stack, TextField } from '@mui/material'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_BORDLE_GAME = gql`
  mutation CreateBordleGameMutation($input: CreateBordleGameInput!) {
    createBordleGame(input: $input) {
      id
    }
  }
`

const NewBordleGamePage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [create] = useMutation(CREATE_BORDLE_GAME)
  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <>
      <MetaTags title="NewBordleGame" description="NewBordleGame page" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextField
            {...register('playerOneName', { required: true })}
            label={'Player One *'}
            variant="filled"
          ></TextField>
          <TextField
            {...register('playerTwoName', { required: true })}
            label={'Player Two *'}
            variant="filled"
          ></TextField>
          <TextField
            {...register('playerOneWord', { required: true })}
            label={'Word One *'}
            variant="filled"
          />
          <TextField
            {...register('playerTwoWord', { required: true })}
            label={'Word Two *'}
            variant="filled"
          />
          <Button type="submit">Save</Button>
        </Stack>
      </form>
    </>
  )
}

export default NewBordleGamePage
