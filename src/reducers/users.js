export const LOGOUT = 'users/LOGOUT';
export const LOGOUT_SUCCESS = 'users/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'users/LOGOUT_FAILURE';

export const LOGIN = 'users/LOGIN';
export const LOGIN_SUCCESS = 'users/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'users/LOGIN_ERROR';

const initialState = {
    current: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                current: action.current
            };

        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error
            };
        case LOGOUT:
            return {
                ...state,
                loading: true
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                current: null,
                loading: false
            };

        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
};
