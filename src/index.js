import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from "redux"; // named export example
import App from './components/App';
import reducers from './reducers'; // default export example

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
