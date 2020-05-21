import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from 'bucares/store';
import AppVersion from "bucares/components/AppVersion";
import IndexationInput from "bucares/components/indexation/input";
import IndexationResult from "bucares/components/indexation/result";

render(
    <Provider store={store}>
        <AppVersion/>
        <IndexationInput/>
		<IndexationResult/>
    </Provider>,
    document.getElementById('react') || document.createElement('div')
);
