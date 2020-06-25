import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";

import "./App.css";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signInSignUp/SignInSignUp";
import { auth, createUserProfileDocument } from './firebase/utils';

class App extends React.Component {
  state = {
    currentUser : null
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapshot => {
          this.setState({
            currentUser : {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }else{
        this.setState({ currentUser: userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth() 
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
