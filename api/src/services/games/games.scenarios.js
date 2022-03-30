export const standard = defineScenario({
  game: {
    one: {
      data: {
        playerOneWord: 'ghost',
        playerTwoWord: 'bread',
        updatedAt: '2022-03-30T19:20:55Z',
        playerOne: {
          create: { name: 'Player One', updatedAt: '2022-03-30T19:20:55Z' },
        },

        playerTwo: {
          create: { name: 'Player Two', updatedAt: '2022-03-30T19:20:55Z' },
        },
      },
    },

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
