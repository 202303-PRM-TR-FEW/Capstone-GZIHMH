export const saveCourse = course => ({
    type: 'SAVE_COURSE',
    payload: course
});

export const selectCourse = courseId => ({
    type: 'SELECT_COURSE',
    payload: courseId
});