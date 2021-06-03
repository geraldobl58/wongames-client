import { render, screen } from '@testing-library/react'

import Auth from '.'

describe('<Auth />', () => {
  it('should render the heading', () => {
    const { container } = render(<Auth />)
  })
})
