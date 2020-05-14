const screen = {
    WIDTH_320: 320,
    WIDTH_480: 480,
    WIDTH_768: 768,
    WIDTH_1080: 1080,
    WIDTH_1440: 1440
};

/**
 * Gets the current screen width.
 *
 * @returns {Number} - Current screen width.
 */
export const getScreenWidth = () => {
    let screenWidth;

    if (window.innerWidth < screen.WIDTH_480) {
        screenWidth = screen.WIDTH_320;
    } else if (window.innerWidth < screen.WIDTH_768) {
        screenWidth = screen.WIDTH_480;
    } else if (window.innerWidth < screen.WIDTH_1080) {
        screenWidth = screen.WIDTH_768;
    } else if (window.innerWidth < screen.WIDTH_1440) {
        screenWidth = screen.WIDTH_1080;
    } else {
        screenWidth = screen.WIDTH_1440;
    }

    return screenWidth;
};

export default screen;
