import * as types from '../actions/actionTypes'
import { lastMonday, nextSunday } from './utils'

const initialState = {
    date: { startDate: lastMonday(), endDate: nextSunday()},
    recipes: [
        {
          title: "Spagetti"
        },
        {
          title: "Potato bravo"
        },
        {
          title: "Potato bravo"
        },
        {
          title: "Potato bravo"
        },
        {
          title: "Potato bravo"
        },
    ],
    ration: [],
    goods: [],
}

const main = (state, action) => {
    switch (action.type) {
        case types.PICK_DATE:
            const {
                startDate = state.date.startDate,
                endDate = state.date.endDate
            } = action.data;
            return { ...state, date: { startDate, endDate }};
        default:
            return initialState;
    }
}

export default main;