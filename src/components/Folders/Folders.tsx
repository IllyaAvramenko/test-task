import React, { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { FileType } from "../../api/api"

import FolderItem from "../FolderItem/FolderItem"

// Actions
import { actions, setFiles } from "../../store/Actions/filesActions"

// Selectors
import { getFiles } from "../../store/Selectors/filesSelectors"



export const Folders: FC = React.memo(() => {

   const history = useHistory()
   const dispatch = useDispatch()

   const files = useSelector(getFiles)

   useEffect(() => {
      dispatch(setFiles())

      // return () => {
      //    dispatch(actions.setFilesSuccess())
      // }
   }, [])
 
   const setCurrentFolderHandler = (folderName: string) => {
      // @ts-ignore
      const folder: FileType[] = files[folderName]

      history.push(`folders/${folderName}`)
      dispatch(actions.setCurrentFolder(folder))
   }
 
   const folders = files ? Object.keys(files).map((item: string) => {
         return (
            <FolderItem name={item} setCurrentFolder={setCurrentFolderHandler} key={item} />
         )
   }) : null 

   return ( 
      <div style={{ display: 'flex' }} >
         {folders}
      </div>
   )
}) 