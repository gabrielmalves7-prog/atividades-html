import Link from 'next/link'
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 1. Função utilitária para combinar clsx e twMerge com segurança no TypeScript
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 2. Definição da interface com o 'children' e o 'className' opcional
interface PesquisaProps {
  children: React.ReactNode;
  className?: string; // Permite passar classes CSS/Tailwind de fora
}

function Pesquisa({ children, className }: PesquisaProps) {
  return (
    // 3. Aplicando o cn() no header para poder modificar o fundo, bordas ou padding de fora
    <header className={cn("w-full bg-black border-b border-gray-200 shadow-sm", className)}>
      {/* max-w-7xl e mx-auto mantêm o conteúdo centralizado em telas muito grandes */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {children}
      </nav>
    </header>
  );
}

export default Pesquisa;
