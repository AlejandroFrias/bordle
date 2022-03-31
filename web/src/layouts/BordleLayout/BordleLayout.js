import { AppBar } from '@mui/material'
import { Link, routes } from '@redwoodjs/router'

const BordleLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Bordle</Link>
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
