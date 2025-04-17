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

//usamos o className para atribuir uma classe à tag
function Topo(){
  return(
    <div className='flex justify-between items-center bg-cyan-400 h-[100px] '>
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">{canal}</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <div>{nome}</div>
    </div>
  ) 
}

export default function Home() {
  return (
      <div>
        <Topo/>
      </div>      
  );
}
