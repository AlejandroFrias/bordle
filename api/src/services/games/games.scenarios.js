export const standard = defineScenario({
  player: {
    playerOne: {
      data: { name: 'Player One' },
    },
    playerTwo: {
      data: { name: 'Player Two' },
    },
  },
  game: {
    one: (scenario) => ({
      data: {
        playerOneWord: 'ghost',
        playerTwoWord: 'bread',
        updatedAt: '2022-03-30T19:20:55Z',
        playerOneId: scenario.player.playerOne.id,
        playerTwoId: scenario.player.playerTwo.id,
      },
    }),

    two: {
      data: {
        playerOneWord: 'guess',
        playerTwoWord: 'thing',
        updatedAt: '2022-03-30T19:20:55Z',
        playerOne: {
          create: { name: 'Alejandro', updatedAt: '2022-03-30T19:20:55Z' },
        },

        playerTwo: {
          create: { name: 'Mike', updatedAt: '2022-03-30T19:20:55Z' },
        },
      },
    },
  },
})
