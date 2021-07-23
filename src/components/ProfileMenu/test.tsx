import { render, screen } from '@testing-library/react'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileMenu />)
  })
})
