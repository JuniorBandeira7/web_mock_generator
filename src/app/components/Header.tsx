export const Header = () => {
    return (
        <header className="flex items-center justify-around p-4 h-16 bg-gray-800 text-white">
            <div className="flex items-center">
                <a href="/">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">GeraTudo</span>
                </a>
            </div>
            <nav className="flex items-center gap-6">
                <a href="/" className="hover:text-gray-400 font-semibold">Gerador</a>
                <a href="/sobre" className="hover:text-gray-400 font-semibold">Sobre</a>
                <a href="/contato" className="hover:text-gray-400 font-semibold">Contato</a>
            </nav>
        </header>
    )
}