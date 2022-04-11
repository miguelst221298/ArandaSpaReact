import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlCategorias } from "../utilities/endpoints";
import {  CategoriaCreacionDTO } from "./categorias.model";
import FormularioCategorias from "./FormularioCategorias";

export default function CrearCategoria() {
    const history = useHistory()
    async function crear(categoria:CategoriaCreacionDTO){
        try{
            await axios.post(urlCategorias, categoria );
            history.push('/');
        }catch(error){
            console.error(error);
        }
    }
    return <>

        <h3>Crear categoria</h3>
        <FormularioCategorias modelo={ {nomCategoria:"" }}  
        onSubmit={async valores => {            
            await crear(valores);
            } }/>

    </>
}