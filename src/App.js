import './App.css';
import Form from './Components/Form';
import AllProducts from './Components/AllProducts';
import Single from './Views/Single';
import Update from './Views/Update';
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Form />
            <AllProducts />
          </Route>
          <Route exact path="/api/products/:_id">
            <Single/>
          </Route>
          <Route exact path="/api/products/update/:_id">
            <Update/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
