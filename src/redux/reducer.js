const initialState = {
    user: {
        username: '',
        profile_pic: ''
    }
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';


export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
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

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function logout(user) {
    return {
        type: LOGOUT_USER
    }
}