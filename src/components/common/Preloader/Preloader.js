import preloader from "../../../assets/images/preloader.svg"
import React from 'react'
import s from "../../../App.module.css"
let Preloader = (props) => {
     return (
<div className={s.preloader}>
<img  alt={"Preloader"} src={preloader} />
</div>  
  )     
}

export default Preloader;