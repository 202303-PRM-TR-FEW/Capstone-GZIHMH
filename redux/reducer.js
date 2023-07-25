const initialState = {

    savedCourses: [],
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_COURSE':
            {
                return {
                    ...state,
                    savedCourses: [
                        ...state.savedCourses,
                        action.payload
                    ]
                };
            }
        case 'REMOVE_COURSE':
            {
                return {
                    ...state,
                    savedCourses: state.savedCourses.filter(course => course.id !== action.payload)
                };
            }
        default:
            return state;
    }
}