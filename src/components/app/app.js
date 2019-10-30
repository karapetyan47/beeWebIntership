import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from '../../redux/store';

import LoginFormContainer from '../../containers/login-form-container';
import Secret from '../secret';
import { MAIN_PATH, SECRET_PAGE_PATH } from '../../constants/const-paths/paths';

import './app.css';

const App = () => {
    return(       
            <Provider store= {store}>
                <Router>
                    <Route path={MAIN_PATH} component={LoginFormContainer} exact />
                    <Route path={SECRET_PAGE_PATH} component={Secret} />
                </Router>
            </Provider>       
    )
}

export default App;


