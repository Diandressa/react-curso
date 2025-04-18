//para passar um propriedade usamos a sintaxe props:tipo, preciso mandar essa propriedade quando chamo esse componente

//interface delimita o tipo que preciso passar para o componente
interface CardProps{
    produto:string,
    valor:number,
    desconto:number,
    //funcao:()=>void
    funcao:any
}

//Tem duas tipos de operações condicionais ternárias: ternária normal e o resumo da ternária
//ternário: usamos quanto houver condição verdadeira e falsa
//resumo ternário: só quando tiver a condição verdadeira

//Podemos usar a operação condicional nos estilos tb
//transformamos o estilo em script pra usar o operador ternário
//*Quando tiver desconto quero que a borda fica azul e quando não tiver ela fica vermelha

export default function Card(props:CardProps){
    return(
        <div className={`flex flex-col border-4 ${props.desconto > 0 ? 'border-b-fuchsia-400' : '  border-cyan-400'} p-4 my-6 rounded`}>
            <div>Produto:{props.produto}</div>
            <div>Valor: R${props.valor}</div>
            
            {/* chamar função se o desconto for maior que zero. Usamos a operação condicional ternária*/}
            {/* 
            {props.desconto > 0 ? (
                //Chama essa função que renderiza os elementos desejados
                <div>
                    <div>Desconto: R${props.desconto}</div>
                    <div>Preço Venda: R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            ) : <div>Sem desconto</div>}
            */}

            {/* como essa operação só retorna algo se for true então podemos usar o resumo da operação ternária, ele não retorna nada se for false*/}

            {props.desconto > 0 && (
                <div>
                    <div>Desconto: R${props.desconto}</div>
                    <div>Preço Venda: R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            )}
            
        </div>   
    )
}