//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

const nome='Bruno Nicolau';
const nomeFuncao='Andressa';
let canal = 'CFB Cursos';

// function retnome(){
//   return nomeFuncao
// }
// const cnl = ()=> {
//   return canal
// }

//função que retorna um bloco mais complexo(com um componente) usamo return() com parenteses
function Topo(){
  return(
    <div>
      <div>Logo</div>
      <div>{canal}</div>
      <div>{nome}</div>
    </div>
  ) 
}

export default function Home() {
  return (
      <div>
        {/* utilizar a função Topo */}
        {/*Topo()*/}
        {/* podemos utilizar como uma tag <> pq ela retorna um componente, o nome da função precisa estar com a primeira letra maiúscula, para o react entender que é um componente */}
        <Topo/>
      </div>      
  );
}
