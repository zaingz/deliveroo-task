import React from 'react'
import logo from '../../assets/svgs/logo-horizontal.svg'
import userIcon from '../../assets/svgs/user-icon.svg'
import styled from 'styled-components'
import { FlexContainer } from '../Containers'
import { StyleConstants } from '../../constants'

type Props = {
  user: User
  className?: string
}

interface User {
  name: string
}

type UserLinkProps = {
  user: User
}

const TopHeader = styled(FlexContainer)`
  background: white;
  height: 45px;
  img {
    width: 100px;
  }
`

const UserLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 10px;
  }
  span {
    color: ${StyleConstants.colors.GREY};
    font-size: 0.75rem;
    margin-left: 10px;
    @media (max-width: ${StyleConstants.breakPoints.MOBILE}px) {
      display: none;
    }
  }
`

const UserLink: React.FunctionComponent<UserLinkProps> = ({ user }) => {
  const copy = !user ? 'Login' : user.name
  return (
    <UserLinkContainer>
      <img src={userIcon} alt="user-logo" />
      <span>{copy}</span>
    </UserLinkContainer>
  )
}

export const TopNav: React.FunctionComponent<Props> = ({ user }) => {
  return (
    <TopHeader>
      <img src={logo} alt="logo" />
      <UserLink user={user} />
    </TopHeader>
  )
}
