import Link from "next/link"
import Card from "./Card"

export default function Topo() {
    return(
        <div className='flex flex-col justify-between items-center bg-cyan-400 h-[150px] p-4'>
            <div>Logo</div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl">CFBCursos</div>
                <div className="subtituloTopo">Curso de React</div>
            </div>
            <nav className="flex gap-5">
                {/*Link nativo do next, href navega entre as pastas */}
                <Link href={"/"}>
                    Home
                </Link>
                {/*Passar parâmetros (como objetos) para o link, envia pela URL*/}
                <Link href={
                    {
                        pathname: "/produtos/produtos",
                        query: {
                            nome: 'Andressa',
                            curso: 'React Next'
                        }
                    }
                }>
                    Produtos
                </Link>
                <Link href={"/localStorage/localStorage"}>
                    LocalStorage
                </Link>
                <Link href={"/usestate/Usestate"}>
                    UseState
                </Link>
                <Link href={"/useeffect/Useeffect"}>
                    UseEffect
                </Link>
                <Link href={"/inputs/Inputs"}>
                    Inputs
                </Link>
                <Link href={"/filtragem/Filtragem"}>
                    Filtragem
                </Link>
            </nav>
        </div>
    )
}