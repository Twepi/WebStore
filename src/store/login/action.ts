import { ActionCreator } from "redux";

export const SET_LOGGED = 'SET_LOGGED'

export type SetLoggedAction = {
  type: typeof SET_LOGGED;
  isLogged: Boolean;
}

export const setLogged: ActionCreator<SetLoggedAction> = (isLogged: Boolean) => ({
  type: SET_LOGGED,
  isLogged
})
