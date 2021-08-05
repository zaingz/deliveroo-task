import React, { useEffect } from 'react'
import styled from 'styled-components'
import { StyleConstants } from '../../constants'
import { LocationNav } from '../../components/LocationNav'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants, selectRestaurants } from '../../redux/restaurantsSlice'
import { RestaurantCard } from '../../components/RestaurantCard'

type Props = {
  className?: string
}
const RestaurantCardContainer = styled.div`
  padding: 0px 5%;
  margin-bottom: 40px;
`

const RestaurantsCountLabel = styled.h4`
  color: ${StyleConstants.colors.LIGHT_GREY};
  margin: 30px 0px;
  font-size: 0.75rem;

`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 31%);
  grid-gap: 1.4%;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 48%);
    grid-gap: 1%;
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, 98%);
    grid-gap: 30px;
  }
`
export const Restaurants: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  const { restaurants, location } = useSelector(selectRestaurants)

  const restaurantCards = restaurants.map((restaurant, i) => (
    <RestaurantCard key={i} {...restaurant} />
  ))
  return (
    <div>
      <LocationNav locationName={location} />
      <RestaurantCardContainer>
        <RestaurantsCountLabel>{restaurants.length} Restaurants</RestaurantsCountLabel>
        <CardGrid>{restaurantCards}</CardGrid>
      </RestaurantCardContainer>
    </div>
  )
}
