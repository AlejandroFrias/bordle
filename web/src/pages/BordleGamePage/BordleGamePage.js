import { MetaTags } from '@redwoodjs/web'
import BordleGameCell from 'src/components/BordleGameCell'

const BordleGamePage = ({ id }) => {
  return (
    <>
      <MetaTags title="BordleGame" description="BordleGame page" />

      <BordleGameCell id={id} />
    </>
  )
}

export default BordleGamePage
