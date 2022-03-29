import { render } from '@redwoodjs/testing/web'

import BordleLayout from './BordleLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BordleLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BordleLayout />)
    }).not.toThrow()
  })
})
