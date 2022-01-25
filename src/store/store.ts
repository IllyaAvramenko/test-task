import { Action, applyMiddleware, createStore } from "redux"
import thunkMiddleware, { ThunkAction } from 'redux-thunk' 
import { rootReducer } from "./Reducers"


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export default store