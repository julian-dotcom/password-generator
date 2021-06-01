
import MyNavbar from "./components/MyNavbar"
import Login from "./components/Login"
import Register from "./components/Register"
import {
  Switch, Route, Link
} from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <div style={{ margin: '9px'}}>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
