import * as types from './actionTypes'

export const addRecipe = (data) => {
    console.log('ghgj')
    return({
        type: types.ADD_RECIPE,
        data,
    })
}

export const deleteRecipe = (id) => ({
    type: types.ADD_RECIPE,
    data: id,
})

export const pickDate = (date) => ({
    type: types.PICK_DATE,
    data: date
})