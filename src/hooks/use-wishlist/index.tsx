import { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'

import { GameCardProps } from 'components/GameCard'

import { useQueryWishlist } from 'graphql/queries/wishlist'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'

import { gamesMapper } from 'utils/mappers'
import { wishlistItems } from './mock'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlstItems, setWishlstItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const [session] = useSession()

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlstItems(data?.wishlists[0]?.games || [])
  }, [data])

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id: string) => {}
  const removeFromWishlist = (id: string) => {}

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlstItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
