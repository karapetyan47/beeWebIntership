import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from '../../redux/store';


import LoginFormContainer from '../../containers/login-form-container';
import Secret from '../secret';

import './app.css';

const App = () => {


    return(       
        <div>
            <Provider store= {store}>
                <Router>
                    <Route path="/" component={LoginFormContainer} exact />
                    <Route path="/secret" component={Secret} />
                </Router>
            </Provider>
        </div>        
    )
}

export default App;
