//para passar um propriedade usamos a sintaxe props:tipo, preciso mandar essa propriedade quando chamo esse componente

//interface delimita o tipo que preciso passar para o componente
interface CardProps{
    produto:string,
    valor:number,
    desconto:number,
}
export default function Card(props:CardProps){
    return(
        <div className="flex flex-col border border-b-fuchsia-400 p-4 my-6 rounded">
            <div>Produto:{props.produto}</div>
            <div>Valor: R${props.valor}</div>
            <div>Desconto: R${props.desconto}</div>
            {/* operação com props*/}
            <div>Preço Venda: R${props.valor - props.desconto}</div>
        </div>   
    )
}