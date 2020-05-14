import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import styles from './styles';

interface Props extends WithStyles<typeof styles>{
}

interface State {
}

class PublicComponent extends React.PureComponent<Props, State> {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.component}>
                PublicComponent
            </div>
        );
    }
}

export default withStyles(styles)(PublicComponent);
