import GameItem, { GameItemProps } from '../GameItem'
import Empty from '../Empty'
import Heading from '../Heading'

import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items?.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders"
        description="Go back to the store and explore great games and offers"
      />
    )}
  </S.Wrapper>
)

export default OrdersList
