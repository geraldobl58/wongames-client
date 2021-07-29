import { render, screen } from '@testing-library/react'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the heading', () => {
    const { container } = render(<Dropdown />)
  })
})
