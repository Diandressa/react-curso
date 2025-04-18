//para passar um propriedade usamos a sintaxe props:tipo, preciso mandar essa propriedade quando chamo esse componente

//interface delimita o tipo que preciso passar para o componente
interface CardProps{
    produto:string,
    valor:number,
    desconto:number,
    //funcao:()=>void
    funcao:any
}

//podemos criar uma função de calcular aqui no Card e depois passar para o componente
//porém criamos em index e passamos o valor calculado para o componente já
//essa funçao só pode ser usada nesse componente
function promocao(valor:number, desconto:number):number{
    return valor + desconto;
}

export default function Card(props:CardProps){
    return(
        <div className="flex flex-col border border-b-fuchsia-400 p-4 my-6 rounded">
            <div>Produto:{props.produto}</div>
            <div>Valor: R${props.valor}</div>
            <div>Desconto: R${props.desconto}</div>
            {/* chamar função e passar os parâmetro que ela aguarda*/}
            <div>Preço Venda: R${props.funcao(props.valor, props.desconto)}</div>

            {/* chamar função criada dentro de card*/}
            <div>Promoção: R${promocao(props.valor, props.desconto)}</div>
        </div>   
    )
}