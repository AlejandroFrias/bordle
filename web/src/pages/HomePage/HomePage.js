import { MetaTags } from '@redwoodjs/web'
import BordleGamesCell from 'src/components/BordleGamesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <BordleGamesCell />
    </>
  )
}

export default HomePage
