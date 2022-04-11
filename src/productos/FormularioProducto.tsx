import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { Categoria } from "../categorias/categorias.model";
import Boton from "../utilities/Boton";
import FormGroupImagen from "../utilities/FormGroupImagen";
import FormGroupSelect from "../utilities/FormGroupSelect";
import FormGroupText from "../utilities/FormGroupText";
import {  ProductoCreacionDTO } from "./productos.model";
import * as Yup from 'yup'
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlCategorias } from "../utilities/endpoints";

export default function FormularioProducto(props: formularioProductProps) {
    const [categorias,setCategorias] = useState<Categoria[]>([]);
    
    useEffect(()=>{
        axios.get(urlCategorias).then(
           ( respuesta: AxiosResponse<Categoria[]>) => { setCategorias(respuesta.data);}
        )
    },[]);
    

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nomProducto: Yup.string().required('Este campo es obligatorio'),
                descripcion: Yup.string().required('Este campo es obligatorio'),
                codCategoria: Yup.number().required('Este campo es obligatorio').mayorQueCero()
            })}
        >

            {(formikProps) => (
                <Form>
                    <FormGroupText label="Nombre" campo={"nomProducto"}></FormGroupText>
                    <FormGroupText label="Descripcion" campo={"descripcion"}></FormGroupText>
                    <FormGroupSelect label="Categoria" campo={"codCategoria"} datos={categorias} />  
                    
                    <FormGroupImagen imagenURL={props.modelo.urlImagen} label={"Imagen"} campo={"imagen"} />

                    <Boton disabled={formikProps.isSubmitting}
                        type="submit"> Guardar</Boton>
                    <Link className="btn btn-secondary" to="/" >Cancelar</Link>
                </Form>
            )}

        </Formik >
    )
}

interface formularioProductProps {
    modelo: ProductoCreacionDTO;
    onSubmit(valores: ProductoCreacionDTO, acciones: FormikHelpers<ProductoCreacionDTO>): void;
}