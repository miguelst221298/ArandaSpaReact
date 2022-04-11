import CrearCategoria from "./categorias/CrearCategoria";
import LandingPage from "./LandingPage";
import CrearProducto from "./productos/CrearProducto";
import EditarProducto from "./productos/EditarProducto";
import RedireccionarALanding from "./utilities/RedireccionALanding";

const rutas=[
    {path:"/", componente: LandingPage, exact:true},
    {path:"/categorias" , componente: CrearCategoria},
    {path:"/productos/crearproducto" , componente: CrearProducto, exact:true},
    {path:"/productos/editar/:id(\\d+)" , componente: EditarProducto},
    




    {path:"*", componente: RedireccionarALanding}
];

export default rutas;