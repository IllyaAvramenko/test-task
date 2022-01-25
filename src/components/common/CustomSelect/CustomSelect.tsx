import { FC } from "react";
import s from './CustomSelect.module.scss'

type PropsType = {
   onSelectChange: (e: any) => void
   valueByDefault: string
}

export const CustomSelect: FC<PropsType> = (props) => {
   return (
      <select 
         className={s.select} 
         id="sortkey-select" 
         onChange={props.onSelectChange} 
         defaultValue={props.valueByDefault} >
         {props.children}
      </select>
   )
}