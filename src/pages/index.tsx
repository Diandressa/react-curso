//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

import Topo from "@/components/Topo";
import Card from "@/components/Card";

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

//esse função pode ser chamada em qualquer componente, precisamos definir o tipo dele na interface do componente somente
function calcDesc(valor:number, desconto:number){
  return valor - desconto;
}

function calcDesc2(valor:number, desconto:number){
  return valor - (desconto/2)
}

export default function Home() {
  return (
      <div>
        <Topo/>
        <div>
          <div style={{color:'#fff', backgroundColor: 'darkcyan', textAlign: 'center'}}>Curso de React Next</div>
        </div>
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
      </div>      
  );
}