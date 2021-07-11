import * as S from './styles'

import Heading from '../Heading'
import MediaMatch from '../MediaMatch'

const GameDetails = () => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary" color="white">
        Game Details
      </Heading>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox Software</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>Nov 16, 2019</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2k</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18K</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </MediaMatch>
  </S.Wrapper>
)

export default GameDetails
