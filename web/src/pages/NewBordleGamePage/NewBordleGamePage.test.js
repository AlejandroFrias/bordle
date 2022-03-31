import { render } from '@redwoodjs/testing/web'

import NewBordleGamePage from './NewBordleGamePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewBordleGamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewBordleGamePage />)
    }).not.toThrow()
  })
})
