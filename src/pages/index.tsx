//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

import Topo from "@/components/Topo";
import Card from "@/components/Card";

export default function Home() {
  return (
      <div>
        <Topo/>
        <div style={{color:'#fff', backgroundColor: 'darkcyan', textAlign: 'center'}}>Curso de React Next</div>
      </div>      
  );
}

//para navegar na URL
//http://localhost:3000/produtos/produtos