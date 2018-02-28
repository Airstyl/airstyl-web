import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import App from './App';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import registerReducer from './store/reducers/register.reducer';
import userReducer from './store/reducers/user.reducer';

const rootReducer = combineReducers({
    register: registerReducer,
    user: userReducer,

});


const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching: ', action);
            const result = next(action);
            console.log('[Middleware] next state: ', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
