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
        {/*style inline css com objeto, usamos uma chave só pq a outra chave já está no objeto*/}
        <div style={cssobjeto}>
          {/*style inline, usa css do javascript. Segui a sintaxe do css no js*/}
          <div style={{color:'#fff', backgroundColor: 'darkcyan', marginRight:'1rem', paddingInline:'1rem'}}>Curso de React Next</div>
          <div>Typescript</div>
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
