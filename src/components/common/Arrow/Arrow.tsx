import React, { FC } from "react";
import s from './Arrow.module.scss'
import LeftArrow from '../../../assets/icons/left-arrow.png'

type PropsType = {
   goBack: () => void
}

const Arrow: FC<PropsType> = (props) => {
   return (
      <div className={s.arrow} onClick={props.goBack}>
         <img src={LeftArrow} alt="" />
      </div>
   )
}

export default React.memo(Arrow)