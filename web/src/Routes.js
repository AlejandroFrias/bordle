// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import GamesLayout from 'src/layouts/GamesLayout'
import PlayersLayout from 'src/layouts/PlayersLayout'
import BordleLayout from './layouts/BordleLayout/BordleLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={GamesLayout}>
        <Route path="/games/new" page={GameNewGamePage} name="newGame" />
        <Route path="/games/{id:Int}/edit" page={GameEditGamePage} name="editGame" />
        <Route path="/games/{id:Int}" page={GameGamePage} name="game" />
        <Route path="/games" page={GameGamesPage} name="games" />
      </Set>
      <Set wrap={PlayersLayout}>
        <Route path="/players/new" page={PlayerNewPlayerPage} name="newPlayer" />
        <Route path="/players/{id:Int}/edit" page={PlayerEditPlayerPage} name="editPlayer" />
        <Route path="/players/{id:Int}" page={PlayerPlayerPage} name="player" />
        <Route path="/players" page={PlayerPlayersPage} name="players" />
      </Set>
      <Set wrap={BordleLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/bordle-game/{id:Int}" page={BordleGamePage} name="bordleGame" />
        <Route path="/new-bordle-game" page={NewBordleGamePage} name="newBordleGame" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
