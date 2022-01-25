import { FilesType, FileType, StatusType } from "../../api/api"
import { getCookie, setCookie } from "../../utils/cookie";
import { FilesActionsType } from "../Actions/filesActions"


const defaultSortKey = getCookie('sortkey') || 'mtime'
const defaultSortOrder = getCookie('sortorder') || 'asc'

const initialState = {
   files: null as FilesType | null,
   currentFolder: [] as FileType[],

   sort: {
      sortKey: defaultSortKey,
      sortOrder: defaultSortOrder
   },
   
   status: {
      isFetching: false,
      message: null
   } as StatusType
}

export const filesReducer = (state = initialState, action: FilesActionsType): InitialStateType => {
   switch (action.type) {

      case "SET_FILES":
         return { ...state, files: action.payload.files }

      case 'SET_CURRENT_FOLDER':
         return { ...state, currentFolder: [...action.payload.folder] }
      
      case "SET_SORT_CURRENT_FOLDER":
         const sortKey = action.payload.sortKey || state.sort.sortKey
         const sortOrder = action.payload.sortOrder || state.sort.sortOrder
         
         setCookie('sortkey', sortKey)
         setCookie('sortorder', sortOrder)
         
         const sortedFolder = state.currentFolder.sort( (a, b) => { 
            // @ts-ignore
            if( a[sortKey] < b[sortKey] ) return sortOrder === defaultSortOrder ? -1 : 1
            // @ts-ignore
            if( a[sortKey] > b[sortKey] ) return sortOrder === defaultSortOrder ? 1 : -1
            return 0
         })
         
         return {
            ...state,
            currentFolder: [ ...sortedFolder ],
            sort: { sortKey, sortOrder }
         }


      case "SET_STATUS":
         return { ...state, status: action.payload.status }
      
      default:
         return state
   }
}

export type InitialStateType = typeof initialState