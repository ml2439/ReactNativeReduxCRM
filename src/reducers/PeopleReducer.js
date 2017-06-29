import people from './people.json';
import TYPES from '../actions/types'

const initialState = {
    people,
    detailView: false,
    personSelected: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TYPES.SELECTED_PERSON:
            return {
                ...state,
                detailView: true,
                personSelected: action.payload
            }
        case TYPES.NONE_SELECTED:
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }
        default: 
            return state;
    }
}