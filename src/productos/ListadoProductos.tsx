import { FiltrosDTO,  ProductoDTO } from "./productos.model"
import { Link } from "react-router-dom"
import Boton from "../utilities/Boton"
import FiltroProductos from "./FiltroProductos";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlObtenerListadoProductos, urlProducto } from "../utilities/endpoints";
import Paginacion from "../utilities/Paginacion";

export default function ListadoProductos() {

    const [productos, setProductos] = useState<ProductoDTO[]>([]);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [cantidadRegistrosPorPagina, setCantidadRegistrosPorPagina] = useState(10);
    const [paginaActual, setPaginaActual] = useState(1);
    const [filtros,setFiltros] = useState<FiltrosDTO>({
        codCategoria: 0,
        nombre: '',
        descripcion: '',
        orden: ''
    });
    
    useEffect(() => {
        ConsultarListado()
    }, [paginaActual,cantidadRegistrosPorPagina,filtros]);

    const onSubmit = (filtros: FiltrosDTO) => {
        setFiltros(filtros);
    }

    function ConsultarListado(){
        filtros.codCategoria= parseInt(filtros.codCategoria.toString());
        axios.post(urlObtenerListadoProductos, filtros,{
            params:{Pagina: paginaActual, CantidadRegistrosAConsultar:cantidadRegistrosPorPagina}
        })
            .then((respuesta: AxiosResponse<ProductoDTO[]>) => {
                const totalRegistros = parseInt(respuesta.headers['totalregistros'], 10);
                setTotalPaginas(Math.ceil(totalRegistros / cantidadRegistrosPorPagina))
                setProductos(respuesta.data);
            })
    }


    const EliminarProducto = (idProducto: number) => {
        if (idProducto > 0) {
            axios.delete(`${urlProducto}/${idProducto}:int`)
            .then( () =>{
                ConsultarListado()
            })
        }
    }

    return (
        <>
        

            <FiltroProductos  onSubmit={(filtros: FiltrosDTO) => onSubmit(filtros)}/>

            <Paginacion cantidadTotalDePaginas={totalPaginas}
                paginaActual={paginaActual}
                onChange={ nuevaPagina => setPaginaActual(nuevaPagina)} />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                    </tr>

                </thead>
                <tbody>
                    {productos?.map(producto =>
                        <tr key={producto.id_Producto}>
                            <td>
                                <Link className="btn btn-info" to={`/productos/editar/${producto.id_Producto}`} >Editar </Link>
                                <Boton className="btn btn-danger" onClick={() => EliminarProducto(producto.id_Producto)}> Eliminar</Boton>
                            </td>
                            <td>{producto.nomProducto}</td>
                            <td>{producto.nomCategoria}</td>
                        </tr>)}
                </tbody>
            </table>
            <Link className="btn btn-success" to="/productos/crearproducto" >Nuevo</Link>
        </>
    )
}



