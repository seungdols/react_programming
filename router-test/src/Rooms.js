import React from 'react'
import { Route, Link } from 'react-router-dom'

function Rooms({ match }) {
  return (
    <div>
      <h2>This is Rooms page.</h2>
      <Link to={`${match.url}/bludRoom`}>Blue Room</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>Green Room</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route exact path={match.url} render={() => <h3>Choice the Room.</h3>} />
    </div>
  )
}

function Room({match}) {
  return <h2>{`${match.params.roomId} nd room selected.`}</h2>
}

export default Rooms