import Link from 'next/link'

export default function Pesquisa() {
    return(
        <>
        <header className="pesquisa">
            <nav>
                <Link href="/form">Formulario</Link>
                <Link href="/sobre" replace>Test</Link>
                <Link href="/test">Oi</Link>
            </nav>
        </header>
        </>
    )
}