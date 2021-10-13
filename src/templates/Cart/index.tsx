import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import Base from '../Base'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import PaymentForm from 'components/PaymentForm'
import CartList, { CartListProps } from 'components/CartList'

import * as S from './styles'

export type CartProps = {
  recommendendTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  recommendendTitle,
  recommendedGames,
  recommendedHighlight
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          My Cart
        </Heading>

        <S.Content>
          <CartList />
          <Elements stripe={stripe}>
            <PaymentForm />
          </Elements>
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendendTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
