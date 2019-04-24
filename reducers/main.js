import * as types from '../actions/actionTypes'
import { lastMonday, nextSunday } from './utils'

const initialState = {
    date: { startDate: lastMonday(), endDate: nextSunday()},
    recipes: [
        {
          name: "Spagetti"
        },
        {
          name: "Potato bravo"
        },
        {
          name: "Potato bravo"
        },
        {
          name: "Potato bravo"
        },
        {
          name: "Potato bravo"
        },
    ],
    ration: [],
    goods: [],
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case types.PICK_DATE:
            const {
                startDate = state.date.startDate,
                endDate = state.date.endDate
            } = action.data;
            return { ...state, date: { startDate, endDate }};
        case types.GET_RATION:
            console.log('state: ', action.data);
            return { ...state, ration: action.data || []}
        case types.GET_RECIPES:
            return { ...state, recipes: action.data || [] }
        default:
            return {...state};
    }
}

export default main;