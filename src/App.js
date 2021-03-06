import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCFNK4tPqhbun0kZa8RqWL0M72Pda5jYIE",
            authDomain: "manager-2c033.firebaseapp.com",
            databaseURL: "https://manager-2c033.firebaseio.com",
            projectId: "manager-2c033",
            storageBucket: "manager-2c033.appspot.com",
            messagingSenderId: "45558207149"
        };
        Firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
        <Provider store={store}>
            <Router />
        </Provider>);
    }
}

export default App;