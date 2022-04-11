import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import Cargando from "../utilities/Cargando";
import { urlProducto } from "../utilities/endpoints";
import { convertirProductoAFormData } from "../utilities/FormDataUtilities";
import FormularioProducto from "./FormularioProducto"
import {  ProductoCreacionDTO } from "./productos.model"

export default function EditarProducto(){
    const {id}:any = useParams();
    const [producto, setProducto] = useState<ProductoCreacionDTO>();
    const history = useHistory();

    useEffect(()=>{
        axios.get(`${urlProducto}/${id}:int`)
        .then( (respuesta:AxiosResponse<ProductoCreacionDTO>) => {            
            setProducto(respuesta.data);
            console.log(respuesta.data);
        })
    },[])
   
    async function editar(productoEditar: ProductoCreacionDTO){       

        try {            
            const formData = convertirProductoAFormData(productoEditar);   
            await axios({
                method:'PUT',
                url:`${urlProducto}/${id}:int`,
                data:formData,
                headers:{'Content-Type' : 'multipart/form-data'}
            });
            history.push('/');
        } catch (error) {
            console.error(error);
        }

    }

    return(<>
    {producto ?
     <FormularioProducto     
    modelo={producto}
    onSubmit={(valores)=> editar(valores)} 
    /> 
    : <Cargando />}
    
        
        </>)
}