// src/App.js
import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/recipe-posts/PostCreateForm';




function App() {


  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          < Route exact path="/recipe-posts/create" render={() => <PostCreateForm />} />
          <Route render={() => <h3>Page not found!</h3>} />
        </Switch>
      </Container>
    </div>

  );
}

export default App;
