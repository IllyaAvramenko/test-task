import { AppStateType } from "../store";

export const getFiles = (state: AppStateType) => state.files.files?.files
export const getCurrentFolder = (state: AppStateType) => state.files.currentFolder
export const getSortParams = (state: AppStateType) => state.files.sort