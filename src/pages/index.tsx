//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

import Topo from "@/components/Topo";
import Card from "@/components/Card";

//para passar uma função o componente pai, precisamos passar para o pai e depois o filho herda
//não podemos passar a função para o pai por meio do filho, podemos passar a função pai para o componente filho

//funcao que faz o calculo, ele tem que receber os parametros do Card. O card chama essa função, e mandamos os parâmetro valor e desconto lá no Card.tsx

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
        <div style={cssobjeto}>
          <div style={{color:'#fff', backgroundColor: 'darkcyan', marginRight:'1rem', paddingInline:'1rem'}}>Curso de React Next</div>
          <div>Typescript</div>
        </div>
        <div className="flex justify-center gap-3">
          {/* passando a propriedade que era receber na função desse componente - armazena na variável props*/}
          <Card produto={"Mouse"} valor={49.90} desconto={10} funcao={calcDesc}/>
          <Card produto={"Teclado"} valor={69.90} desconto={2} funcao={calcDesc}/>
          <Card produto={"Monitor"} valor={459.90} desconto={0} funcao={calcDesc2}/>
          <Card produto={"CPU"} valor={799.90} desconto={50} funcao={calcDesc2}/>
        </div>
      </div>      
  );
}

//Style inline css com objeto
const cssobjeto={
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  color:'#aaa',
  backgroundColor:'#eee',
  fontSize:'20px',
}
