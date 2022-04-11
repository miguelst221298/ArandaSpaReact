import { Field, ErrorMessage } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText(props:formGroupTextProps){
    return(<>
        <div className="form-group">
        {props.label? <label htmlFor={props.campo} > {props.label} </label> : null }
        <Field placeholder={props.placeholder} name={props.campo} className="form-control"/>
    </div>         

    <ErrorMessage name={props.campo}>{    mensaje => <MostrarErrorCampo  mensaje={mensaje}/>}</ErrorMessage>
        </>)
}
interface formGroupTextProps{
    campo:string;
    label?:string;
    placeholder?:string;
}
