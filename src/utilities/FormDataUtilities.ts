import { ProductoCreacionDTO } from "../productos/productos.model";

export function convertirProductoAFormData(producto: ProductoCreacionDTO) : FormData{
    const formData = new FormData();
    formData.append('nomProducto',producto.nomProducto);
    formData.append('codCategoria',producto.codCategoria.toString());
    formData.append('descripcion',producto.descripcion);

    if(producto.imagen){
        formData.append('imagen',producto.imagen);
    }
        

    return formData;
}