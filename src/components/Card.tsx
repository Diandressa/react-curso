//para passar um propriedade usamos a sintaxe props:tipo, preciso mandar essa propriedade quando chamo esse componente

//interface delimita o tipo que preciso passar para o componente
interface CardProps{
    produto:string,
    valor:number,
    desconto:number,
    funcao:any
}

export default function Card(props:CardProps){
    return(
        <div className={`flex flex-col justify-center border-4 ${props.desconto > 0 ? 'border-b-fuchsia-400' : '  border-cyan-400'} p-4 my-6 rounded`}>
            <div>Produto:{props.produto}</div>
            <div>Valor: R${props.valor}</div>

            {props.desconto > 0 && (
                <div>
                    <div>Desconto: R${props.desconto}</div>
                    <div>Preço Venda: R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            )}
            
        </div>   
    )
}