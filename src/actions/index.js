import TYPES from './types';
import firebase from 'firebase';

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

export const formUpdate = ({ prop, value }) => {
    return {
        type: TYPES.FORM_UPDATE,
        payload: { prop, value }
    }
}

export const createNewContact = ({ first_name, last_name, phone, email, company, project, notes }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people`)
            .push({ first_name, last_name, phone, email, company, project, notes })
            .then(() => {
                dispatch({ type: TYPES.NEW_CONTACT })
            })
    }
}

export const loadInitialContacts = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people`)
            .on('value', snapshot => {
                dispatch({ type: TYPES.INITIAL_FETCH, payload: snapshot.val() })
            })
    }   
}

export const deleteContact = (uid) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people/${uid}`)
            .remove()
            .then(() => {
                dispatch({ type: TYPES.DELETE_CONTACT })
            })
    }
}

export const updateContact = (personSelected) => {
    return {
        type: TYPES.UPDATE_CONTACT,
        payload: personSelected
    }
}

export const saveContact = ({ first_name, last_name, phone, email, company, project, notes, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/people/${uid}`)
            .set({ first_name, last_name, phone, email, company, project, notes, uid })
            .then(() => {
                dispatch({ type: TYPES.SAVE_CONTACT })
            })
    } 
}