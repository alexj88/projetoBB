import { Nav } from './components/NavPagHome';
import { CardBanco } from './components/card';
import { TabelaBancos } from './components/TabelaBancos';







export function App() {
return (
  <div className='App'>
      <Nav/>
      <div className='subtitulo'>
        <ul class="subtitulo">
        <li>Comunidade de Investidores PCDs: Crescendo Juntos</li>
        <li>Investidor PCD: Informação e Estratégias para o Sucesso</li>
        <li>Rede de Investidores PCDs Compartilhando Conhecimento</li>
        <li >Seu Guia de Investimentos: Conteúdo Exclusivo para PCDs</li>
        <li > Investidor PCD: Informação e Suporte para o seu Futuro Financeiro</li>
      <div/>
        
      </ul>
      
    <div class="chamada">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8Y6XY25_l1SiyAoCC4OQg2eCtVZ4UIfqiA&s" alt="pessoas felizes investindo" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HyAP4BZgKee2k8YF73EAopEpw9-WGJdw0w&s" alt="pessoas felizes investindo" />
      
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdaEfOz5UUj94C0TQZRIJbMmhaW2Im5SKJA&s" alt="pessoas felizes investindo" />
          <h3>Investidor PCD: O Futuro Financeiro que Você Merece, Sem Barreiras.<br/></h3>
          <h4>Conheça agora! os Top 10 Melhores Bancos em Acessibilidade</h4>
    </div>
      <div class='CardBancos'>
      <CardBanco src="https://cdn.worldvectorlogo.com/logos/banco-do-nordeste.svg"
            titulo="Banco do Nordeste"
            acessibilidade="1º em acessibildade 97 pontos"
            urlBanco="https://www.bnb.gov.br/voce/investimentos"
        />
        <br></br>
      <CardBanco src="https://www.bancobmg.com.br/lumis-theme/br/com/bmg/portal/theme/bmg-portal/img/logo-bmg.svg"
            titulo="Banco BMG"
            acessibilidade="2º em acessibildade 97 pontos"
            urlBanco="https://www.bancobmg.com.br/investimentos/"
            
        />
      <CardBanco src="https://cdn.worldvectorlogo.com/logos/caixa-economica-federal-1.svg"
            titulo="Caixa Econômica Federal"
            acessibilidade="3º em acessibildade 94 pontos"
            urlBanco="https://www.caixa.gov.br/investimentos/Paginas/default.aspx"
        />   
         <CardBanco src="https://cdn.worldvectorlogo.com/logos/itau-4.svg"
            titulo="Banco Itaú"
            acessibilidade="4º em acessibildade 94 pontos"
            urlBanco="https://www.itau.com.br/investimentos"
        /> 
       <CardBanco src="https://www.dashcontroles.com.br/wp-content/uploads/2023/08/mercado-pago-logo.png"
            titulo="Mercado Pago"
            acessibilidade="5º em acessibildade 93 pontos"
            urlBanco="https://www.mercadopago.com.br/conta"
        /> 
        <CardBanco src="https://banco.bradesco/assets/classic/img/portal-investimento/logo-bradesco-vermelho.png"
            titulo="Bradesco"
            acessibilidade="6º em acessibildade 92 pontos"
            urlBanco="https://banco.bradesco/html/classic/portal-investimentos/index.shtm"
        />
        <CardBanco src="https://cdn.worldvectorlogo.com/logos/picpay-1.svg"
            titulo="PicPay"
            acessibilidade="7º em acessibildade 91 pontos"
            urlBanco="https://picpay.com/investimentos"
        /> 
        <CardBanco src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2.png"
            titulo="Nubank"
            acessibilidade="8º em acessibildade 84 pontos"
            urlBanco="https://nubank.com.br/nu/investimentos"
            
        /> 
        <CardBanco src="https://gfi-portal-web.apps.bb.com.br/appms/assets/img/logo-bb.png"
            titulo="Banco do Brasil"
            acessibilidade="9º em acessibildade 82 pontos"
            urlBanco="www.bb.com.br/site/investimentos/"
        /> 
        <CardBanco src="https://cdn.worldvectorlogo.com/logos/santander1.svg"
            titulo="Banco Santander"
            acessibilidade="10º em acessibildade 77 pontos"
            urlBanco="https://www.santander.com.br/banco/investimentos"
        /> 
       </div>
      <TabelaBancos></TabelaBancos>
    </div>
  </div>
)
}


