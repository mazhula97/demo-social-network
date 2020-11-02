import React from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";


const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return ( 
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
    <div>
     {props.children}
    </div>
    {hasError && <span> {meta.error} </span>}
  </div>
    )
}


export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
     
   <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
  );
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
  return (
    <FormControl {...props}><input {...input} {...restProps} /></FormControl>
  );
};


export const createField = (placeholder, email, validators, component, props = {}, text = "") => {
  return(
<div>
<Field
  placeholder={placeholder}
  name={email}
  validate={validators}
  component={component}
  {...props}
/> {text} 
</div>

  )
  
}