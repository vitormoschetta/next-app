import styles from '../styles/upperCase.module.css'
import convert from './convert.jsx'

export default function UpperCaseComponent() {

    return (
        <div className="">
            <div className={styles.head}>
                Converter texto - maiusculo / minusculo
            </div>

            <div className={styles.main}>
                Entrada:
                <div className={styles.texto_entrada}>
                    <textarea id="textarea01"></textarea>
                </div>

                Saída:
                <div className={styles.texto_saida}>
                    <textarea id="textarea02"></textarea>
                </div>
            </div>

            <div className={styles.options}>
                <input type="radio" name="opcao" id="r01" value="r01" />Converter para Maiúsculo <br />
                <input type="radio" name="opcao" id="r02" value="r02" />Maiusculo para Minusculo <br />
                <input type="radio" name="opcao" id="r03" value="r03" />Primeira letra de todas as palavras Maiúsculo <br />
                <input type="radio" name="opcao" id="r04" value="r04" />Primeira letra de todas as frases Maiúsculo <br />

                <button onClick={convert}>Converter</button>
            </div>
        </div>
    )
}
