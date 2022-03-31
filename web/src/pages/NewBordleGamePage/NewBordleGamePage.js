import { Box, FormControl, FormLabel, Stack, TextField } from '@mui/material'
import { Form, Submit, useForm, Text, FieldError } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewBordleGamePage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = (values) => console.log(values)

  return (
    <>
      <MetaTags title="NewBordleGame" description="NewBordleGame page" />

      <Form onSubmit={handleSubmit(onSubmit)} config={{ mode: 'onBlur' }}>
        <Stack>
          <TextField
            {...register('playerName', { required: true })}
            label={'Player *'}
            variant="outlined"
          />
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
          <Submit>Save</Submit>
        </Stack>
      </Form>
    </>
  )
}

export default NewBordleGamePage
