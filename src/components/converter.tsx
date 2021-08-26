import { useState } from 'react'
import styles from '../styles/layout.module.css'

export default function Converter(params) {

    // params é somente leitura
    
    const [real, setReal] = useState(params.vlr_real)
    const [dolar, setDolar] = useState(params.vlr_dolar)    

    function calc() {        
        setDolar(real * 5.36)
    }

    return (
        <div className={styles.formulario}>
            <div>
                <label>Valor Real R$</label>
                <input type="text" value={real} onChange={e => setReal(e.target.value)} />
            </div>

            <div>
                <label>Valor Dolar</label>
                <input type="text" readOnly value={dolar} />
            </div>

            <div>
                <button onClick={calc}>Calcular</button>
            </div>
        </div>

    )
}