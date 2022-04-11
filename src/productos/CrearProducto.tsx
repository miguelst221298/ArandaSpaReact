import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlProducto } from "../utilities/endpoints";
import { convertirProductoAFormData } from "../utilities/FormDataUtilities";
import FormularioProducto from "./FormularioProducto";
import {  ProductoCreacionDTO } from "./productos.model";

export default function CrearProducto() {
    const history = useHistory()

    const productoVacio: ProductoCreacionDTO = {
        id_Producto: 0,
        nomProducto: "",
        descripcion: "",
        codCategoria: -1,
        urlImagen:""
    }
    async function crear(producto: ProductoCreacionDTO) {
        try {
            const formData = convertirProductoAFormData(producto);    

            await axios({
                method:'POST',
                url:urlProducto,
                data:formData,
                headers:{'Content-Type' : 'multipart/form-data'}
            });
            history.push('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (<>
        <FormularioProducto
            modelo={productoVacio}
            onSubmit={crear} />

    </>)
}