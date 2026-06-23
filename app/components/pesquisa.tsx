import Link from 'next/link'

function Pesquisa({ children }: { children: React.ReactNode },) {
  return (
    <header className="w-full bg-black border-b border-gray-200 shadow-sm">
      {/* max-w-7xl e mx-auto mantêm o conteúdo centralizado em telas muito grandes */}
      <nav className="max-w-7xl mx-auto flex-1 items-center justify-between px-6 py-4">
        {children}
      </nav>
    </header>
  );
}

export default Pesquisa;