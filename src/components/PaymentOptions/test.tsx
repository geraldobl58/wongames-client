import { render, screen } from '@testing-library/react'

import PaymentOptions from '.'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    const { container } = render(<PaymentOptions />)
  })
})
