export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE';

export const setScreenSize = (width: Number) => {
    return {
        type: SET_SCREEN_SIZE,
        width
    };
};
