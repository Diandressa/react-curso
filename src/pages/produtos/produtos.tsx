//página que vai mostrar todos os produtos

import Card from "@/components/Card";
import Topo from "@/components/Topo";

//pegar os parâmetros passados pela URL no link com o Router, Router é um hook
import { useRouter } from "next/router";

//array de objetos
const produtos=[
  {
    id:1,
    produto: 'Mouse',
    valor: 49.9,
    desconto: 0,
    disponivel: true

  },
  {
    id:2,
    produto: 'Teclado',
    valor: 659.9,
    desconto: 10,
    disponivel: true

  },
  {
    id:3,
    produto: 'Monitor',
    valor: 689.9,
    desconto: 0,
    disponivel: false

  },
  {
    id:4,
    produto: 'CPU',
    valor: 829.9,
    desconto: 100,
    disponivel: true

  },
  {
    id:5,
    produto: 'Caixa Som',
    valor: 39.9,
    desconto: 0,
    disponivel: true

  },
  {
    id:6,
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

export default function ProdutosPagina(){
  //pegar os parâmetros passados pela URL no link com o Router
  const Router = useRouter();
  //const nome = Router.query.nome;
  //const curso = Router.query.curso;
  //desestruturar
  const {nome, curso} = Router.query;
  console.log(nome, curso)
    return(
        <>
            <Topo/>
            <div className="flex flex-wrap justify-center gap-3">
            {/*Entra com js usando as {}. Retorna o Card para cada elemento do array */}
            {
                produtos.map((e:any)=>{
                if(e.disponivel){
                    return (
                    <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc}>
                        {/*elementos filho do componente, passe o filho para o componente. */}
                        <div>Curso de React Next</div>
                        <div>CFB Cursos</div>
                    </Card>
                    )
                }
                })
            }
            </div>
        </>
    )
}