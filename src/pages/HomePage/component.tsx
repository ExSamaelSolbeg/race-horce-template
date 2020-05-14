import React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import PublicComponent from 'components/PublicComponent';

import HomePageComponent from './HomePageComponent';
import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    screenWidth: number,
    setScreenSize: (width: number) => void
}

interface State {
    anyLocalStateValue: any
}

class HomePage extends React.PureComponent<Props, State> {
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
                HomePage
                <br/>
                <HomePageComponent />
                <br/>
                <PublicComponent />
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);
