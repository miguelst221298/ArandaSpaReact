import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Boton from "../utilities/Boton";
import FormGroupText from "../utilities/FormGroupText";
import * as Yup from 'yup'
import { CategoriaCreacionDTO } from "./categorias.model";

export default function FormularioCategorias(props: formularioCategoriasProps) {
    return (<Formik initialValues={props.modelo}
        onSubmit={props.onSubmit}

        validationSchema={Yup.object({
            nomCategoria: Yup.string().required("Este campo es obligatorio")
        })}

    >
        {(formikProps) => (
            <Form>
                <FormGroupText campo="nomCategoria" label="Nombre" placeholder="Lacteos"></FormGroupText>
                <Boton disabled={formikProps.isSubmitting}
                    type="submit"> Guardar</Boton>
                <Link className="btn btn-secondary" to="/" >Cancelar</Link>
            </Form>
        )}


    </Formik>)
}

interface formularioCategoriasProps{
    modelo:CategoriaCreacionDTO;
    onSubmit(valores: CategoriaCreacionDTO, accion: FormikHelpers<CategoriaCreacionDTO>): void;

}