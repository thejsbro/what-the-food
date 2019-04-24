import axios from 'axios'
import * as types from './actionTypes'

export const addRecipe = (data) => {
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

export const getRation = () => {
    return (dispatch) => {
        axios.get('http://157.230.96.127/api/v1/meals/?from=2019-01-01&to=2019-12-31', {
            headers: {
                Authorization: 'Token 0e1c3d68a7d0b6d2cbcec3f41344e35e50fc5925',
            },
        })
        .then((response) => {
            console.log('dishes: ', JSON.stringify(response.data))
            return dispatch(
                {
                    type: types.GET_RATION,
                    data: response.data
                }
            );
        });
    }
}

export const getRecipes = () => {
    return (dispatch) => {
        axios.get('http://157.230.96.127/api/v1/dishes/?offset=10&limit=10', {
            headers: {
                Authorization: 'Token 0e1c3d68a7d0b6d2cbcec3f41344e35e50fc5925',
            },
        })
        .then((response) => {
            console.log('recipes: ', JSON.stringify(response.data.results))
            return dispatch(
                {
                    type: types.GET_RECIPES,
                    data: response.data.results
                }
            );
        });
    }
}

export const addRecipeToRation = (dish_id) => {
    const data = {
        dish_id,
        datetime: "2019-04-23T15:54:52.272Z",
        user_id: 2,
        portions: 1
    };
    console.log(data)
    return (dispatch) => {
        axios.post('http://157.230.96.127/api/v1/meals/',
        data,
        {
            headers: {
                Authorization: 'Token 0e1c3d68a7d0b6d2cbcec3f41344e35e50fc5925',
            },
        })
        .then((response) => {
            console.log('recipes: ', JSON.stringify(response))
            return dispatch(
                {
                    type: types.ADD_TO_MY_RATION,
                }
            );
        })
        .catch((error) => {
            console.log('error: ', error);
        });
    }
}