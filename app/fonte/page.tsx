import React from 'react';

import estilo from './estilo.module.css';

export default function page() {
  return (
    <html>
        <body className={estilo.texto}>
          <h3>Canal de Jogos Jogaveis</h3>

          <p> <span className={estilo.destaque}>SE INSCREVAM NO CANAL!!</span> </p>
          <p>
            Eai galerinha do Youtube!
          </p>

          <blockquote className={estilo.torto}>Esse canal é muito legal</blockquote>
        </body>
    </html>
  )
};
