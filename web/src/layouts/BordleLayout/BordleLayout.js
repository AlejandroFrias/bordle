import { Button } from '@mui/material'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BordleLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Bordle</Link>
          {isAuthenticated ? (
            <>
              <span>{currentUser.player.name}</span>
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Games</Link>
            </li>
            <li>
              <Link to={routes.newBordleGame()}>New</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BordleLayout
