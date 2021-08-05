import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../Containers'
import { StyleConstants } from '../../constants'

type Props = {
  locationName: string
  className?: string
}

const LocationHeader = styled(FlexContainer)`
  background: ${StyleConstants.colors.DELIVEROO_BLUE};
  height: 115px;
  @media (max-width: ${StyleConstants.breakPoints.MOBILE}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: self-end;
  }
`

const CurrentLocationContainer = styled.div`
  display: flex;
  flex-flow: column;
  h5 {
    margin-bottom: 8px;
    font-size: 0.75rem;
    color: ${StyleConstants.colors.GREY};
  }
  h3 {
    color: white;
    font-size: 1.4rem;
  }
  @media (max-width: ${StyleConstants.breakPoints.MOBILE}px) {
    margin-top: 10px;
  }
`

const ChangeLocationButton = styled.button`
  border: none;
  background: white;
  padding: 8px 12px;
  font-size: 0.8rem;
  border-radius: 3px;
  font-weight: 500;
  color: ${StyleConstants.colors.DELIVEROO_BLUE};
  @media (max-width: ${StyleConstants.breakPoints.MOBILE}px) {
    margin-top: 15px;
  }
`

export const LocationNav: React.FunctionComponent<Props> = ({ locationName }) => {
  return (
    <LocationHeader>
      <CurrentLocationContainer>
        <h5>Location</h5>
        <h3>{locationName}</h3>
      </CurrentLocationContainer>
      <ChangeLocationButton>Change Location</ChangeLocationButton>
    </LocationHeader>
  )
}
