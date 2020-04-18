import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from 'bucares/store';
import AppVersion from "bucares/components/AppVersion";

render(
    <Provider store={store}>
        <AppVersion/>
    </Provider>,
    document.getElementById('react')
);
