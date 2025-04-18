//para passar um propriedade usamos a sintaxe props:tipo, preciso mandar essa propriedade quando chamo esse componente
export default function Card(props:any){
    return(
        <div className="flex flex-col border border-amber-400 p-1">
            <div>{props.produto}</div>
            <div>{props.valor}</div>
        </div>   
    )
}