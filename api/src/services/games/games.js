import { db } from 'src/lib/db'

export const games = () => {
  return db.game.findMany()
}

export const myGames = ({ playerId }) => {
  return db.game.findMany({
    where: {
      OR: [
        {
          playerOneId: playerId,
        },
        {
          playerTwoId: playerId,
        },
      ],
    },
  })
}

export const game = ({ id }) => {
  return db.game.findUnique({
    where: { id },
  })
}

export const createGame = ({ input }) => {
  return db.game.create({
    data: input,
  })
}

export const createBordleGame = async ({ input }) => {
  const playerOne = await db.player.findUnique({
    where: { name: input.playerOneName },
  })
  const playerTwo = await db.player.findUnique({
    where: { name: input.playerTwoName },
  })
  const newInput = {
    playerOneId: playerOne.id,
    playerTwoId: playerTwo.id,
    playerOneWord: input.playerOneWord,
    playerTwoWord: input.playerTwoWord,
  }

  return db.game.create({
    data: newInput,
  })
}

export const updateGame = ({ id, input }) => {
  return db.game.update({
    data: input,
    where: { id },
  })
}

export const deleteGame = ({ id }) => {
  return db.game.delete({
    where: { id },
  })
}

export const Game = {
  playerOne: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).playerOne(),
  playerTwo: (_obj, { root }) =>
    db.game.findUnique({ where: { id: root.id } }).playerTwo(),
}
