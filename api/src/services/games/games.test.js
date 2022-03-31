import {
  games,
  game,
  createGame,
  updateGame,
  deleteGame,
  createBordleGame,
} from './games'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('games', () => {
  scenario('returns all games', async (scenario) => {
    const result = await games()

    expect(result.length).toEqual(Object.keys(scenario.game).length)
  })

  scenario('returns a single game', async (scenario) => {
    const result = await game({ id: scenario.game.one.id })

    expect(result).toEqual(scenario.game.one)
  })

  scenario('creates a game', async (scenario) => {
    const result = await createGame({
      input: {
        playerOneId: scenario.game.two.playerOneId,
        playerTwoId: scenario.game.two.playerTwoId,
        playerOneWord: 'String',
        playerTwoWord: 'String',
        // updatedAt: '2022-03-30T19:20:55Z',
      },
    })

    expect(result.playerOneId).toEqual(scenario.game.two.playerOneId)
    expect(result.playerTwoId).toEqual(scenario.game.two.playerTwoId)
    expect(result.playerOneWord).toEqual('String')
    expect(result.playerTwoWord).toEqual('String')
    // const isoString = new Date('2021-10-15T19:40:33Z').toISOString()
    // expect(result.updatedAt).toEqual(isoString)
  })

  scenario('creates a bordle game', async (scenario) => {
    const result = await createBordleGame({
      input: {
        playerOneName: scenario.player.playerOne.name,
        playerTwoName: scenario.player.playerTwo.name,
        playerOneWord: 'happy',
        playerTwoWord: 'right',
        // updatedAt: '2022-03-30T19:20:55Z',
      },
    })

    expect(result.playerOneId).toEqual(scenario.game.one.playerOneId)
    expect(result.playerTwoId).toEqual(scenario.game.one.playerTwoId)
    expect(result.playerOneWord).toEqual('happy')
    expect(result.playerTwoWord).toEqual('right')
    // expect(result.updatedAt).toEqual('2022-03-30T19:20:55Z')
  })

  scenario('updates a game', async (scenario) => {
    const original = await game({ id: scenario.game.one.id })
    const result = await updateGame({
      id: original.id,
      input: { playerOneWord: 'String2' },
    })

    expect(result.playerOneWord).toEqual('String2')
  })

  scenario('deletes a game', async (scenario) => {
    const original = await deleteGame({ id: scenario.game.one.id })
    const result = await game({ id: original.id })

    expect(result).toEqual(null)
  })
})
