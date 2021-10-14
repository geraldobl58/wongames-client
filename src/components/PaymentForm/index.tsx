import { useState, useEffect } from 'react'

import Heading from '../Heading'
import Button from '../Button'

import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { useCart } from 'hooks/use-cart'

import { createPaymentIntent } from 'utils/stripe/methods'

import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import * as S from './styles'
import { Session } from 'next-auth/client'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({ items, token: session.jwt })

        if (data.freeGames) {
          setFreeGames(true)
          console.log(data.freeGames)
          return
        }

        if (data.error) {
          setError(data.error)
        } else {
          setClientSecret(data.client_secret)
          console.log(data.client_secret)
        }
      }
    }
    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <CardElement
          options={{
            hidePostalCode: true,
            style: { base: { fontSize: '16px' } }
          }}
          onChange={handleChange}
        />
        {error && (
          <S.Error>
            <ErrorOutline size={20} />
            {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={disabled || !!error}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
