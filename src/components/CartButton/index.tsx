import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import { useCart } from '../../hooks/use-cart'

import Button from '../Button'

type CartButtonProps = {
  id: string
}

const CartButton = ({ id }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from Cart" />
        ) : (
          <AddShoppingCart aria-label="Add to Cart" />
        )
      }
      size="small"
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    />
  )
}

export default CartButton
