import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard />)
  })
})
