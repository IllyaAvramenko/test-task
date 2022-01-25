import React, { FC } from "react"
import s from './FileItem.module.scss'
import FileIcon from '../../assets/icons/file.png'
import { FileType } from "../../api/api"

type PropsType = {
   file: FileType
}

const FileItem: FC<PropsType> = ({ file }) => {
   return (
      <div className={s.file__item} >
         <div className={s.file__item_wrapper}>
            <div className={s.file__item_top}>
               <img src={FileIcon} alt="file icon" />
            </div>
            <div className={s.file__item_bottom}>
               <p>{file.name}</p>
            </div>
         </div>
      </div>
   )
}

export default React.memo(FileItem)