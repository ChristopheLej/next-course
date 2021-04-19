import { useReducer } from 'react';
import { apiFetch } from '../api/apiFetch';

const initialState = {
  courses: []
};

const ActionType = {
  SuccessLoadCourses: '[Course] Success Load Courses'
};

function reducer(state = initialState, action) {
  console.log(action.type, action);
  switch (action.type) {
    case ActionType.SuccessLoadCourses:
      return { ...state, courses: action.payload };

    default:
      return state;
  }
}

export function useCourses() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    courses: state.courses,
    fetchCourses: async function () {
      const courses = await apiFetch('/courses', { method: 'GET' });
      console.log(courses);
      dispatch({ type: ActionType.SuccessLoadCourses, payload: courses.payload });
    }
  };
}
