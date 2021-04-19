import { useReducer } from 'react';
import { apiFetch } from '../api/apiFetch';

const initialState = {
  user: null,
  isLogin: false
};

const ActionType = {
  SUCCESS_LOGIN_USER: '[Login] Success Login',
  ERROR_LOGIN_USER: '[Login] Error Login'
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case ActionType.SUCCESS_LOGIN_USER:
      return { ...state, user: action.payload, isLogin: true };

    case ActionType.ERROR_LOGIN_USER:
      return initialState;

    default:
      return state;
  }
}

export function useLogin() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    user: state.user,
    isLogin: state.isLogin,
    Login: async function (data) {
      try {
        const user = await apiFetch('/login', { method: 'POST', body: data });
        console.log('apiFetch');
        dispatch({ type: ActionType.SUCCESS_LOGIN_USER, payload: user });
      } catch {
        dispatch({ type: ActionType.ERROR_LOGIN_USER });
      }
    }
  };
}
