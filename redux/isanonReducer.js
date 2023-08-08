const initialState = {
    isAnonymous: false,
    loading: false
}
export default function isanonReducer(state = initialState, action) {
    switch (action.type) {

        case 'SET_IS_ANONYMOUS':
            {
                return {
                    ...state,
                    isAnonymous: action.payload,
                };
            }
        default:
            return state;
    }
}