import React from 'react';
import { Link } from 'react-router-dom';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { getScreenWidth } from 'utils/screen';

import routes from 'common/routes';

import styles from './styles';

interface Props extends WithStyles<typeof styles>{
    screenWidth: number,
    setScreenSize: (width: number) => void
}

interface State {
    anyLocalStateValue: any
}

class MasterPage extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            anyLocalStateValue: null
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        return (
            <>
                <div>
                    <Link to={routes.home}>
                        HomePage
                    </Link>
                    <br />
                    <Link to={routes.profile}>
                        ProfilePage
                    </Link>
                    <br />
                </div>

                <br /><hr /><br />

                {this.props.children}
            </>
        );
    }

    handleWindowResize = () => {
        const { screenWidth, setScreenSize } = this.props;

        const newScreenWidth = getScreenWidth();

        if (newScreenWidth !== screenWidth) {
            setScreenSize(newScreenWidth);
        }
    };
}

export default withStyles(styles)(MasterPage);
