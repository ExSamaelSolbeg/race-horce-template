import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { setScreenSize } from 'store/actions/screen';

import ProfilePage from './component';

interface State {
    screen: {
        width: any
    }
}

export const mapStateToProps = (state: State) => {
    return {
        screenWidth: state.screen.width
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setScreenSize: bindActionCreators(setScreenSize, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePage));
