import Profile from 'templates/Profile'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

import orderMock from 'components/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: orderMock
    }
  }
}
