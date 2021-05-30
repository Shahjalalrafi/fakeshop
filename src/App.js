import './App.css';
import Header from './Container/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductDetails from './Container/ProductDetails';
import ProductList from './Container/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>

          <Route path='/Product/:productId'>
            <ProductDetails />
          </Route>

          <Route exact path='/'>
              <ProductList />
          </Route>
          
          <Route path="*">
              Page not found..404
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
