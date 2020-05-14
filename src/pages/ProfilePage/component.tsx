import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    screenWidth: number,
    setScreenSize: (width: number) => void
}

interface State {
    anyLocalStateValue: any
}

class ProfilePage extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            anyLocalStateValue: null
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.component}>
                ProfilePage
            </div>
        );
    }
}

export default withStyles(styles)(ProfilePage);
