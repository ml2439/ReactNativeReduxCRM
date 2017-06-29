import TYPES from './types'

export const selectPerson = (peopleId) => {
    return {
        type: TYPES.SELECTED_PERSON,
        payload: peopleId
    }
}

export const noneSelected = () => {
    return {
        type: TYPES.NONE_SELECTED,
    }
}
