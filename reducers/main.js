const initialState = {
    huy: 'k'
}

const main = (state, action) => {
    switch (action.type) {
        case 'huy':
            return initialState;
        default:
            return initialState;
    }
}

export default main;