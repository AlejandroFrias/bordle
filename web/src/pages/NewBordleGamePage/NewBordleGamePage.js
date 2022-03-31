import { Button, Stack, TextField } from '@mui/material'
import { MetaTags } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const NewBordleGamePage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const onSubmit = (values) => console.log(values)

  return (
    <>
      <MetaTags title="NewBordleGame" description="NewBordleGame page" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextField
            {...register('playerName', { required: true })}
            label={'Player *'}
            variant="outlined"
          ></TextField>
          {errors?.playerName?.type === 'required' && (
            <p>This field is required</p>
          )}
          <TextField
            {...register('secretWord', { required: true })}
            label={'Secret Word *'}
            variant="filled"
          />
          {errors?.secretWord?.type === 'required' && (
            <p>This field is required</p>
          )}
          <Button type="submit">Save</Button>
        </Stack>
      </form>
    </>
  )
}

export default NewBordleGamePage
