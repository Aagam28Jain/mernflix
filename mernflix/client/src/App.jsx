import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./app.scss";

import Fronthome from "./pages/fronthome/Fronthome";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
      <Route  exact path='/'>
        {user ? <Fronthome/> : <Redirect to="/register"/>} 
        </Route>
        <Route   path='/register'  >
        {!user ? <Register/> : <Redirect to="/"/>} 
        </Route>
      <Route   path='/login' >
      {!user ? <Login/>  : <Redirect to="/"/>} </Route>
      {user && (
        <>
        <Route path='/movies'  ><Fronthome type="movies"/></Route>
        <Route path='/series'  ><Fronthome type="series"/></Route>
        <Route   path='/watch'  ><Watch/></Route>
        </>
      )}
      
 
        </Switch>
    
    </Router>
  );
};
export default App;
