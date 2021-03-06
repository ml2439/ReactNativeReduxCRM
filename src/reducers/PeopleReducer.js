import TYPES from '../actions/types'

const initialState = {
    people: [],
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
    toUpdate: false,
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
        case TYPES.UPDATE_CONTACT:
            return {
                ...state,
                toUpdate: true,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                phone: action.payload.phone,
                email: action.payload.email,
                company: action.payload.company,
                project: action.payload.project,
                notes: action.payload.notes,
                uid: action.payload.uid,
            }

        case TYPES.SAVE_CONTACT:
            return {
                ...state,
                toUpdate: false,
                detailView: false,
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
                uid: '',
            }
        case TYPES.DELETE_CONTACT:
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }
        default:
            return state;
    }
}