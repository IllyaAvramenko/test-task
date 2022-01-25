import { api, FilesType, FileType } from "../../api/api";
import { BaseThunkType, InferActionsTypes } from "../store";

export const actions = {
   setFilesSuccess: (files: FilesType | null = null) => ({ 
      type: 'SET_FILES', 
      payload: { files } 
   } as const),
   setStatus: (isFetching: boolean, message: string | null = null) => ({ 
      type: 'SET_STATUS', payload: { status: { isFetching, message } } 
   } as const),
   setCurrentFolder: (folder: FileType[] = []) => ({ 
      type: 'SET_CURRENT_FOLDER', payload: { folder } 
   } as const),
   setSortCurrentFolder: (sortKey: string | null = null, sortOrder: string | null = null) => ({ 
      type: 'SET_SORT_CURRENT_FOLDER', payload: { sortKey, sortOrder } 
   } as const),
}

export const setFiles = (): ThunkType => async (dispatch) => {
   dispatch(actions.setStatus(true))
   try {
      const files = await api.getFiles()
      dispatch(actions.setFilesSuccess(files))
      dispatch(actions.setStatus(false))
   } catch(e: any) {
      dispatch(actions.setStatus(false, e.message))
   }
}

export type FilesActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<FilesActionsType>