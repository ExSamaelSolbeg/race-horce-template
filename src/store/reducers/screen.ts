import { getScreenWidth } from 'utils/screen';

import { SET_SCREEN_SIZE } from 'store/actions/screen';

const initialState = {
    width: getScreenWidth()
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SCREEN_SIZE:
            return {
                ...state,
                width: action.width
            };

        default:
            return state;
    }
};
