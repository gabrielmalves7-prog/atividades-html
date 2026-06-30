import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PesquisaProps {
  children: React.ReactNode;
  className?: string;
}

function Pesquisa({ children, className }: PesquisaProps) {
  return (
    <header className={cn("w-full bg-black border-b border-gray-200 shadow-sm", className)}>
      {/* Removemos max-w-7xl e mx-auto, mantendo apenas o flex e o padding lateral */}
      <nav className="w-full flex items-center justify-between px-6 py-4">
        {/* Substituímos o <br> por uma estrutura mais limpa. 
            Seu logo ou título do site pode vir aqui à esquerda */}
        <div className="text-xl font-bold text-white">Logo</div> 
        
        {/* Os links que vêm do children se alinharão à direita */}
        <div className="flex gap-4">
          {children}
        </div>
      </nav>
    </header>
  );
}

export default Pesquisa;