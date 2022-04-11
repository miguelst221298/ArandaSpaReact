
export default  function Boton(props: botonProps){
    return(<button 
        type={props.type} 
        className={props.className} 
        onClick={props.onClick}
        disabled={props.disabled}>  
        {props.children}</button>)
}

interface botonProps{
    children: React.ReactNode;
    onClick?(): void;
    type: "button"|"submit";
    disabled:boolean;
    className?:string;
}

Boton.defaultProps={
type:"button",
disabled:false,
className:"btn btn-primary"
}