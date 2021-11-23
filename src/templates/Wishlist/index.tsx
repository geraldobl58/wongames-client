import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Empty from 'components/Empty'
import Loader from 'components/Loader'

import { useWishlist } from 'hooks/use-wishlist'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendendTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendendTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary" color="white">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

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

export default Wishlist
