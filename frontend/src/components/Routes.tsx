import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'

const Routes: React.FC = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact={true} component={Home} />
          {/* Another routes */}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes