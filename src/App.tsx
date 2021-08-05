import React from 'react'
import { Restaurants } from './views/Restaurants'
import { TopNav } from './components/TopNav'
import GlobalStyle from './globalStyles'

type Props = {
  className?: string
}

const App: React.FunctionComponent<Props> = ({ className }) => {
  const user = { name: 'Jane Smith' }
  return (
    <div>
      <GlobalStyle />
      <TopNav user={user} />
      <Restaurants />
    </div>
  )
}

export default App
