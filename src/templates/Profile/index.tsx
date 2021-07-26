import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'

import * as S from './styles'

export type profileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: profileTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        My profile
      </Heading>

      <S.Main>
        <ProfileMenu />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  </Base>
)

export default Profile
