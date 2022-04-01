import { Link, routes } from '@redwoodjs/router'

const AdminLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.admin()}>Admin Bordle</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.games()}>Games Admin</Link>
            </li>
            <li>
              <Link to={routes.players()}>Players Admin</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  )
}

export default AdminLayout
