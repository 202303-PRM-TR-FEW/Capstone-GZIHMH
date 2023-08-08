const initialState = {

        selectedCourse: [],
        loading: false
    }
    //adding saved course and remove course action to the reducer//
export default function selectCourseReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_COURSE':
            {
                return {
                    ...state,
                    selectedCourse: [
                        ...state.selectedCourse,
                        action.payload
                    ]
                };
            }
        case 'CLEAR_COURSE':
            {
                return {
                    ...state,
                    selectedCourse: null
                };
            }

        default:
            return state;
    }
}