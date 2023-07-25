export const saveCourse = course => ({
    type: 'SAVE_COURSE',
    payload: course
});

export const removeCourse = courseId => ({
    type: 'REMOVE_COURSE',
    payload: courseId
});