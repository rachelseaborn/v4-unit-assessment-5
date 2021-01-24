const initialState = {
    user: {
        username: '',
        profile_pic: ''
    }
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';

//Action creator functions

export function updateUser(user) {
    const action = {
        type: UPDATE_USER,
        payload: user
    }
    return action;
}

export function logout(user) {
    const action = {
        type: LOGOUT_USER,
        payload: user
    }
    return action
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (action.type) {
        case UPDATE_USER:
            return { ...state, user: payload };
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}
