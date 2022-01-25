import { FC } from "react";
import s from './CustomLabel.module.scss'

type PropsType = {
   for: string
}

export const CustomLabel: FC<PropsType> = (props) => {
   return (
      <label className={s.label} htmlFor={props.for}>
         {props.children}
      </label>
   )
}