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
            <nav className="flex gap-3">
                {/*Link nativo do next, href navega entre as pastas */}
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/produtos/produtos"}>
                    Produtos
                </Link>
                <Link href={"/teste/teste"}>
                    Teste
                </Link>
            </nav>
        </div>
    )
}