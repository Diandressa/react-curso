//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

// const nome='Bruno Nicolau';
// const nomeFuncao='Andressa';
// let canal = 'CFB Cursos';

//usar o retorno de uma função
function retnome(){
  return nomeFuncao
}

export default function Home() {
  //escopo da função agora, só é acessada dentro dessa função
  const nome='Bruno Nicolau';
  const nomeFuncao='Andressa';
  let canal = 'CFB Cursos';
  //var canal = 'CFB Cursos'; tb dá erro por causa do typescript, ele não permite pq usa o Strict Mode

  //posso usar a função dentro da função home, ela acessa as variáveis pq as variáveis estão no escopo global
  // function retnome(){
  //   return nomeFuncao
  // }

  //return tem quer a última coisa da função
  return (
      <div>
        <div>CFB React</div>
        <div>{canal}</div>
        <div>{nome}</div>
        <div>{retnome()}</div>
      </div>      
  );
}
