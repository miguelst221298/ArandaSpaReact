import { ErrorMessage, Field } from "formik";
import { Categoria } from "../categorias/categorias.model"
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupSelect(props: formGroupSelectProps) {
    return (
        <>
        {props.label? <label htmlFor={props.campo} > {props.label} </label> : null }
        <Field className={props.className} as="select" name={props.campo}>
            <option value="-1">Sin selección</option>
            {props.datos.map(categoria => <option key={categoria.id_Categoria} value={categoria.id_Categoria}> {categoria.nomCategoria}</option>)}
        </Field>
        <ErrorMessage name={props.campo}>{    mensaje => <MostrarErrorCampo  mensaje={mensaje}/>}</ErrorMessage>
        </>
    )
}
interface formGroupSelectProps {
    campo: string;
    datos: Categoria[];
    className?:string;
    label?:string;
}

FormGroupSelect.defaultProps = {
    className: "form-control"
}