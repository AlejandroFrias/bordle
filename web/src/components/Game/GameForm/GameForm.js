import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const GameForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.game?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="playerOneId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Player one id
        </Label>

        <NumberField
          name="playerOneId"
          defaultValue={props.game?.playerOneId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="playerOneId" className="rw-field-error" />

        <Label
          name="playerTwoId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Player two id
        </Label>

        <NumberField
          name="playerTwoId"
          defaultValue={props.game?.playerTwoId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="playerTwoId" className="rw-field-error" />

        <Label
          name="playerOneWord"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Player one word
        </Label>

        <TextField
          name="playerOneWord"
          defaultValue={props.game?.playerOneWord}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="playerOneWord" className="rw-field-error" />

        <Label
          name="playerTwoWord"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Player two word
        </Label>

        <TextField
          name="playerTwoWord"
          defaultValue={props.game?.playerTwoWord}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="playerTwoWord" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default GameForm
