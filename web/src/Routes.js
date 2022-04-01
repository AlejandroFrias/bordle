// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import GamesLayout from 'src/layouts/GamesLayout'
import PlayersLayout from 'src/layouts/PlayersLayout'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import BordleLayout from './layouts/BordleLayout/BordleLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={AdminLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
          <Set wrap={GamesLayout}>
            <Route path="/admin/games/new" page={GameNewGamePage} name="newGame" />
            <Route path="/admin/games/{id:Int}/edit" page={GameEditGamePage} name="editGame" />
            <Route path="/admin/games/{id:Int}" page={GameGamePage} name="game" />
            <Route path="/admin/games" page={GameGamesPage} name="games" />
          </Set>
          <Set wrap={PlayersLayout}>
            <Route path="/admin/players/new" page={PlayerNewPlayerPage} name="newPlayer" />
            <Route path="/admin/players/{id:Int}/edit" page={PlayerEditPlayerPage} name="editPlayer" />
            <Route path="/admin/players/{id:Int}" page={PlayerPlayerPage} name="player" />
            <Route path="/admin/players" page={PlayerPlayersPage} name="players" />
          </Set>
        </Set>
      </Private>
      <Private unauthenticated="signup">
        <Set wrap={BordleLayout}>
          <Route path="/" page={HomePage} name="home" />
          <Route path="/bordle-game/{id:Int}" page={BordleGamePage} name="bordleGame" />
          <Route path="/new-bordle-game" page={NewBordleGamePage} name="newBordleGame" />
          <Route notfound page={NotFoundPage} />
        </Set>
      </Private>
    </Router>
  )
}

export default Routes
