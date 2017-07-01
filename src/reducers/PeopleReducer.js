import people from './people.json';
import TYPES from '../actions/types'

const initialState = {
    people,
    detailView: false,
    personSelected: null,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes: '',
    loadingPeople: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.INITIAL_FETCH:
            return {
                ...state,
                people: action.payload
            }
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
        case TYPES.FORM_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case TYPES.NEW_CONTACT:
            return {
                ...state,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
            }
        case TYPES.ADD_PERSON:
            return {
                ...state,
                ...action.newPerson
            }
        default:
            return state;
    }
}