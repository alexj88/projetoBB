import './TabelaBancos.css';
export function TabelaBancos() {
    return (

        <div className="main-content">
            <br />
            <h3>Os Top 10 Melhores Bancos para Investir</h3>
            <div className="tabelabancos">
                <table className="table table-primary table-striped table-hover table-active md"  >
                    <thead>
                        <tr>
                            <th>Banco</th>
                            <th>Ranking</th>
                            <th>Nota</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr >
                            <td><a href="#bancodonordeste">Banco do Nordeste</a></td>
                            <td>1º</td>
                            <td>97</td>
                        </tr>

                        <tr>
                            <td><a href="#bancobmg">Banco BMG</a></td>
                            <td>2º</td>
                            <td>97</td>

                        </tr>

                        <tr  >
                            <td><a href="#caixa">Caixa Economica Federal</a></td>
                            <td>3º</td>
                            <td>94</td>

                        </tr>

                        <tr>
                            <td><a href="#itau">Itaú</a></td>
                            <td>4º</td>
                            <td>94</td>

                        </tr>

                        <tr >
                            <td><a href="#mercadopago">Mercado Pago</a></td>
                            <td>5º</td>
                            <td>93</td>

                        </tr>

                        <tr>
                            <td><a href="#bradesco">Bradesco</a></td>
                            <td>6º</td>
                            <td>92</td>

                        </tr>

                        <tr >
                            <td><a href="#picpay">PicPay</a></td>
                            <td>7º</td>
                            <td>91</td>

                        </tr>

                        <tr>
                            <td><a href="#nubank">Nubank</a></td>
                            <td>8º</td>
                            <td>84</td>

                        </tr>

                        <tr >
                            <td><a href="#bb">Banco do Brasil</a></td>
                            <td>9º</td>
                            <td>82</td>

                        </tr>

                        <tr>
                            <td><a href="#santander">Banco Santander</a></td>
                            <td>10º</td>
                            <td>77</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

    )
}