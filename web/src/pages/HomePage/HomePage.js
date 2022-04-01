import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import BordleGamesCell from 'src/components/BordleGamesCell'

const HomePage = () => {
  const { isAuthenticated, currentUser, _logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <BordleGamesCell playerId={currentUser.playerId} />
      {/* <BordleGamesCell /> */}
    </>
  )
}

export default HomePage
