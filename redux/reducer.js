const initialState = {

        savedCourses: [],
        loading: false
    }
    //adding saved course and remove course action to the reducer//
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_COURSE':
            {
                return {
                    ...state,
                    savedCourses: [
                        action.payload
                    ]
                };
            }
        case 'SELECT_COURSE':
            {
                return {
                    ...state,
                    savedCourses: state.savedCourses.filter(course => course.id == action.payload)
                };
            }

        default:
            return state;
    }
}