import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import routes from 'common/routes';
import MasterPage from 'components/MasterPage';

import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';
import NotFoundPage from 'pages/NotFoundPage';

import styles from './styles';

interface Props extends WithStyles<typeof styles>{
}

interface State {
}

class App extends React.PureComponent<Props, State> {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact path={routes.home}
                        component={this.getPageComponent(<HomePage />)} />
                    <Route
                        path={routes.profile}
                        component={this.getCustomerPageComponent(<ProfilePage />)} />
                    <Route
                        component={this.getPageComponent(<NotFoundPage />)} />
                </Switch>
            </BrowserRouter>
        );
    }

    getPageComponent = (component) => () => {
        return (
            <MasterPage>
                {component}
            </MasterPage>
        );
    };

    getCustomerPageComponent = (component) => () => {
        return (
            <MasterPage>
                {component}
            </MasterPage>
        );
    };
}

export default withStyles(styles)(App);
