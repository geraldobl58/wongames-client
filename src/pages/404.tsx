import Base from 'templates/Base'
import { Container } from 'components/Container'
import Empty from 'components/Empty'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not Found"
          description="Ops... this page does exist. Go back to the store and enjoy offers."
          hasLink
        />
      </Container>
    </Base>
  )
}
