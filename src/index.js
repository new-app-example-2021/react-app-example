import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import indexRoutes from './routes/index';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })}
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
