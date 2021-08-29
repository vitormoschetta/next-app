import Convert from './convert.jsx'

export default function UpperCaseComponent() {

    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Entrada:</label>
                <textarea className="form-control" id="textarea01"></textarea>
            </div>

            <div className="mb-3">
                <label className="form-label">Saída:</label>
                <textarea className="form-control" id="textarea02"></textarea>
            </div>

            <fieldset className="row mb-3">
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="opcao" id="r01" value="r01" />
                        <label className="form-check-label">
                            Converter para Maiúsculo
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="opcao" id="r02" value="r02" />
                        <label className="form-check-label" >
                            Converte para Minusculo
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="opcao" id="r03" value="r03" />
                        <label className="form-check-label" >
                            Primeira letra de todas as PALAVRAS em Maiúsculo
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="opcao" id="r04" value="r04" />
                        <label className="form-check-label" >
                            Primeira letra de todas as FRASES em Maiúsculo
                        </label>
                    </div>
                </div>
            </fieldset>

            <button type="button" className="btn btn-primary" onClick={Convert}>Converte</button>
        </div>
    )
}
