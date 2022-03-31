import { render } from '@redwoodjs/testing/web'

import BordleGamePage from './BordleGamePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BordleGamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BordleGamePage />)
    }).not.toThrow()
  })
})
