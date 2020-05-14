import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import styles from './styles';

interface Props extends WithStyles<typeof styles>{
}

interface State {
}

class HomePageComponent extends React.PureComponent<Props, State> {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.component}>
                HomePageComponent
            </div>
        );
    }
}

export default withStyles(styles)(HomePageComponent);
