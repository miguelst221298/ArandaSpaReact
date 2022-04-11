import axios, { AxiosResponse } from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Categoria } from "../categorias/categorias.model";
import Boton from "../utilities/Boton";
import { urlCategorias } from "../utilities/endpoints";
import FormGroupSelect from "../utilities/FormGroupSelect";
import { FiltrosDTO } from "./productos.model";

export default function FiltroProductos(props: filtroProductosProps) {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const valorInicial: FiltrosDTO = {
        nombre: "",
        descripcion: "",
        codCategoria: 0,
        orden: ""
    }

    useEffect(() => {
        axios.get(urlCategorias).then(
            (respuesta: AxiosResponse<Categoria[]>) => {
                console.log(respuesta.data);
                setCategorias(respuesta.data);
            }
        )
    }, []);


    return (<>
        <h3>Filtro productos</h3>
        <Formik
            initialValues={valorInicial}
            onSubmit={valores => props.onSubmit(valores)}
        >
            {(formikProps) => (
                <Form>

                    <div className="form-inline">
                        <div className="form-group bm-2">
                            <label htmlFor="nombre" className="sr-only">Nombre</label>
                            <Field placeholder="Nombre del producto" name="nombre" className="form-control" />
                        </div>
                        <div className="form-group bm-2">
                            <label htmlFor="descripcion" className="sr-only">Descripcion</label>
                            <Field placeholder="Descripcion del producto" name="descripcion" className="form-control" />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <FormGroupSelect campo={"codCategoria"} datos={categorias} />
                        </div>
                        <Boton className="btn btn-primary mb-2 mx-sm-3" onClick={() => formikProps.submitForm()}>Filtrar</Boton>
                        <Boton className="btn btn-secondary mb-2 mx-sm-3" onClick={() => {
                            formikProps.setValues(valorInicial);
                            formikProps.submitForm();
                        }}>Limpiar</Boton>
                    </div>
                </Form>
            )}
        </Formik>
    </>)
}

interface filtroProductosProps {
    onSubmit(filtros: FiltrosDTO): void;
}