import '@testing-library/jest-dom'
window.matchMedia = function(query) {
    return {
        addEventListener: () => {},
        dispatchEvent: () => false,
        media: "",
        matches: false,
        onchange: null,
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {}

    }
}