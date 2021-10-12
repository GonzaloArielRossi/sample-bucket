import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { HomeContainer } from './Components/Home/HomeContainer';
import { Footer } from './Components/Footer/Footer';
import { ItemInCartContainer } from './Components/Cart/ItemInCartContainer';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
          <Footer />
        </Route>

        <Route exact path="/products">
          <ItemListContainer />
          <Footer />
        </Route>

        <Route exact path="/products/:categoryId">
          <ItemListContainer />
          <Footer />
        </Route>

        <Route exact path="/productDetails/:itemId">
          <ItemDetailContainer />
          <Footer />
        </Route>

        <Route path="/login">
          <h1>Login Page</h1>
          <Footer />
        </Route>

        <Route path="/sign-up">
          <h1>Sign-Up Page</h1>
          <Footer />
        </Route>

        <Route path="/cart">
          <ItemInCartContainer />
          <Footer />
        </Route>

        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;