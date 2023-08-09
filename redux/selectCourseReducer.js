const initialState = {

        selectedCours: [],
        loading: false
    }
    //adding saved course and remove course action to the reducer//
export default function selectCourseReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_COURSE':
            {
                return {
                    selectedCours: [
                        ...state.selectedCours,
                        action.payload
                    ]
                };
            }
        case 'CLEAR_COURSE':
            return {

                selectedCours: null
            }

        default:
            return state;
    }
}