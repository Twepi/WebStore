import { ActionCreator } from "redux";

export const SET_LOGGED = 'SET_LOGGED'

export type SetLoggedAction = {
  type: typeof SET_LOGGED;
  isLogged: boolean;
}

export const setLogged: ActionCreator<SetLoggedAction> = (isLogged: boolean) => ({
  type: SET_LOGGED,
  isLogged
})
