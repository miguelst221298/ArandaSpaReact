export interface Producto {
    id_Producto: number;
    nomProducto: string;
    descripcion: string;
    imagen: string;
    codCategoria: number;

}

export interface ProductoDTO {
    id_Producto: number;
    nomProducto: string;
    nomCategoria: string;

}
export interface ProductoCreacionDTO{
    id_Producto: number;
    nomProducto: string;
    descripcion: string;
    codCategoria: number;
    imagen?: File;
    urlImagen : string;
}


export interface FiltrosDTO {
    codCategoria: number;
    nombre: string;
    descripcion: string;
    orden: string;
}
