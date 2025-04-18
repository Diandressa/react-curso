//página que vai mostrar todos os produtos

import Card from "@/components/Card";
import Topo from "@/components/Topo";

//array de objetos
const produtos=[
  {
    produto: 'Mouse',
    valor: 49.9,
    desconto: 0,
    disponivel: true

  },
  {
    produto: 'Teclado',
    valor: 659.9,
    desconto: 10,
    disponivel: true

  },
  {
    produto: 'Monitor',
    valor: 689.9,
    desconto: 0,
    disponivel: false

  },
  {
    produto: 'CPU',
    valor: 829.9,
    desconto: 100,
    disponivel: true

  },
  {
    produto: 'Caixa Som',
    valor: 39.9,
    desconto: 0,
    disponivel: true

  },
  {
    produto: 'Microfone',
    valor: 65.0,
    desconto: 0,
    disponivel: true

  }
]

function calcDesc(valor:number, desconto:number){
  return valor - desconto;
}

function calcDesc2(valor:number, desconto:number){
  return valor - (desconto/2)
}

export default function produtosPagina(){
    return(
        <>
            <Topo/>
            <div className="flex flex-wrap justify-center gap-3">
            {/*Entra com js usando as {}. Retorna o Card para cada elemento do array */}
            {
                produtos.map((e:any)=>{
                if(e.disponivel){
                    return (
                    <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc}/>
                    )
                }
                })
            }
            </div>
        </>
    )
}