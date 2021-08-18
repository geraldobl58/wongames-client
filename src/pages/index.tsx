import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from '../templates/Home'

import bannerMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

import { initializeApollo } from 'utils/apollo'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      data: data,
      initializeApollo: apolloClient.cache.extract(),
      banners: bannerMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
