import {ActionTypes} from '../constants/types'

export const addContact = (contact)=>{
    return {
        type:ActionTypes.CREATE_CONTACT,
        payload:contact
    }
}

export const updateContact = (id)=>{
    return {
        type:ActionTypes.UPDATE_CONTACT,
        payload:id
    }
}

export const deleteContact = (id)=>{
    return {
        type:ActionTypes.DELETE_CONTACT,
        payload:id
    }
}

export const selectAllContact = (contact)=>{
    return {
        type:ActionTypes.SELECT_CONTACT,
        payload:contact
    }
}

export const getContact = (contact)=>{
    return {
        type:ActionTypes.GET_CONTACT,
        payload:contact
    }
}


  
