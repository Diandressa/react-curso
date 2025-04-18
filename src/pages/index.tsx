//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

import Topo from "@/components/Topo";
import Card from "@/components/Card";

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
          <Card produto={"Mouse"} valor={'R$49,90'}/>
          <Card produto={"Teclado"} valor={'R$69,90'}/>
          <Card produto={"Monitor"} valor={'R$459,90'}/>
          <Card produto={"CPU"} valor={'R$799,90'}/>
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
