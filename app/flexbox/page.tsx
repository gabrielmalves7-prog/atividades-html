import React from 'react';

import estilo from './estilo.module.css';

export default function page() {
  return (
    <html>
        <body>
            <div className={estilo.divpai}>

                <div className={estilo.divfilho}>
                    <p>Aoba</p>
                </div>

                <div className={estilo.divfilho}>
                    <p>Salve</p>
                </div>

                <div className={estilo.divfilho2}>
                    <p>Oi</p>
                </div>

            </div>
        </body>
    </html>
  )
};
