import React, { FC } from 'react'
import s from './FolderItem.module.scss'
import FolderIcon from '../../assets/icons/folder-icon.png'

type PropsType = {
   name: string
   setCurrentFolder: (folderName: string) => void
}

const FolderItem: FC<PropsType> = (props) => {

   
   return (
      <div className={s.folder__item} onDoubleClick={() => props.setCurrentFolder(props.name)} >
         <div className={s.folder__item_wrapper}>
            <div className={s.folder__item_top}>
               <img src={FolderIcon} alt="folder icon" />
            </div>
            <div className={s.folder__item_bottom}>
               <p>{props.name}</p>
            </div>
         </div>
      </div>
   )
}

export default React.memo(FolderItem)