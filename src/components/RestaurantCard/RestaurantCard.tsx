import React from 'react'
import styled from 'styled-components'
import { StyleConstants } from '../../constants'

type RestaurantCardProps = {
  name: string
  image: string
  price: number
  tags: string[]
  className?: string
}

const RestaurantDetailsSection = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    margin-top: 8px;
    color: ${StyleConstants.colors.LIGHT_GREY};
    font-size: 0.75rem;
    font-weight: 100;
  }
`

const RestaurantCardContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
  ${RestaurantDetailsSection} {
    margin-top: 10px;
  }
`

export const RestaurantCard: React.FunctionComponent<RestaurantCardProps> = ({
  name,
  image,
  price,
  tags,
  className,
}) => {
  const detailsContent = [...tags, new Array(price).fill('£').join('')]

  const detailsCopy = detailsContent.join(' • ')

  return (
    <RestaurantCardContainer className={className}>
      <img src={image} alt="Restaurant-cover" />
      <RestaurantDetailsSection>
        <h3>{name}</h3>
        <p>{detailsCopy}</p>
      </RestaurantDetailsSection>
    </RestaurantCardContainer>
  )
}
