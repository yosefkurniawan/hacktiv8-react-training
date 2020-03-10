const initialState = { userData: {}, isFetching: false, isError: false };

const asyncReducer = (state = initialState, action) => { 
    switch (action.type) {
        case 'FETCH_USER':
            return { ...state, isFetching: true, userData:{}, isError: false };
        case 'FETCHED_USER':
            return { 
                ...state,
                isFetching: false,
                userData: action.data,
                isError: false
            };
        case 'RECEIVE_ERROR':
            return { ...state, isFetching: false, isError: true };
        default:
            return state; 
    }
};

export default asyncReducer;