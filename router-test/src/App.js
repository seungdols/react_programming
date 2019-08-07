import React, {Component}  from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Rooms from './Rooms'
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ padding: 20, border: '5px solid gray'}}>
          <Link to="/">Home</Link>
          <br />
          <Link to="/photo">photo</Link>
          <br />
          <Link to="/rooms">room</Link>
          <br />
          <Route exact path="/" component={Home}/>
          <Route path="/photo" component={Photo}/>
          <Route path="/rooms" component={Rooms}/>
        </div>
      </BrowserRouter>
    )
  }
}

function Home({ match }) {
  return <h2>This is Homepage. Be page click</h2>
}
function Photo({ match }) {
  return <h2>This is Photo.</h2>
}

export default App;
