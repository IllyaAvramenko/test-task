import React, { FC, useEffect, ChangeEvent } from "react"
import s from './Folder.module.scss'

import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { FileType } from "../../api/api"
import Arrow from "../common/Arrow/Arrow"
import FileItem from "../FileItem/FileItem"


// Selectors 
import { getCurrentFolder, getSortParams  } from "../../store/Selectors/filesSelectors"

// Actions
import { actions } from "../../store/Actions/filesActions"
import { CustomSelect } from "../common/CustomSelect/CustomSelect"
import { CustomLabel } from "../common/CustomLabel/CustomLabel"


const Folder: FC = () => {

   const history = useHistory()
   const dispatch = useDispatch()

   const currentFolder = useSelector(getCurrentFolder)
   
   const { sortKey, sortOrder } = useSelector(getSortParams)

   useEffect(() => {
      // dispatch(setFiles())
      // // @ts-ignore
      // const folderName = params.folder
      // // @ts-ignore
      // if (files) {
      //    console.log(Object.keys(files))
      // }
      // // const currentFolder = files ? files.Folder1 : []
      // // dispatch(actions.setCurrentFolder(currentFolder))
   }, [])

   const goBack = () => {
      history.goBack()
   } 
   
   const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { target: { value } } = e
      dispatch(actions.setSortCurrentFolder(value))
   }

   const setSortOrder = (e: ChangeEvent<HTMLInputElement>) => {
      const { target: { value } } = e
      dispatch(actions.setSortCurrentFolder(null, value))
   }
   
   const insideFiles = currentFolder.map((file: FileType) => {
      return <FileItem file={file} key={file.name}/>
   })
   
   return (
      <div className={s.folder} >
         <div className={s.folder__top}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
               <Arrow goBack={goBack} />
            </div>
            <div style={{ display: 'flex' }}>
               <div style={{margin: '0.4rem'}} >
                  <CustomLabel for={'sortkey-select'}> Sort by key </CustomLabel>
                  <CustomSelect 
                     valueByDefault={sortKey}
                     onSelectChange={onFilterChange}
                     >
                     <option value="mtime">Created time</option>
                     <option value="name">Name</option>
                     <option value="type">Type</option>
                     <option value="size">Size</option>
                  </CustomSelect>
               </div>

               <div style={{margin: '0.4rem'}}>
                  <CustomLabel for={'sortorder-select'}> Sort by order </CustomLabel>
                  <CustomSelect 
                     valueByDefault={sortOrder}
                     onSelectChange={setSortOrder}
                     >
                     <option value="asc">ASC</option>
                     <option value="desc">DESC</option>
                  </CustomSelect>
               </div>
            </div>
         </div>
         <div style={{ display: 'flex' }}>
            {insideFiles}
         </div>
      </div>
   )
}

export default React.memo(Folder)