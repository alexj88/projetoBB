<<<<<<< HEAD
import { Nav } from './components/NavPagHome';
=======
>>>>>>> conteudo
import { CardBanco } from './components/Card';
import { TabelaBancos } from './components/TabelaBancos';
import { NavMenu } from './components/Navbar';
import { Container, Navbar } from 'react-bootstrap';
import { Carrossel } from './components/carrossel';

export function App() {
return (
  <div className='App'>
    
      <h1 className="tituloprincipal">Bem Vindo ao AcessInvest App</h1>
      <NavMenu/>
      <br />
      <section id="chamada">
        <div class="chamada">
          
                Descubra as melhores opções de bancos e investimentos, pensadas para você.
                Sabemos que o mundo dos investimentos pode parecer complexo, especialmente quando a acessibilidade é uma prioridade. Por isso, criamos uma plataforma que simplifica sua jornada financeira, conectando você aos bancos e carteiras de investimento mais acessíveis do mercado.
                
        
        </div>
      </section>
      <section id='quemsomos'>
      
            <br/>
            
            <strong>O que oferecemos:</strong><br/>
            Encontrar opções financeiras que atendam às suas necessidades pode ser desafiador. Nós simplificamos essa busca, indicando bancos e carteiras de investimento com foco em acessibilidade. Avaliamos atendimento, plataformas online e produtos financeiros, oferecendo opções personalizadas para você investir com segurança e autonomia. Conte com nossa comunidade de suporte, artigos informativos e ferramentas online. Lembre-se: consulte um profissional antes de investir. Juntos, construímos um futuro financeiro acessível e próspero.
            <hr/>

              {/* [Botão: Comece Agora]

              [Link: Conheça Nossos Serviços]

              [Link: Entre em Contato] */}

              Recursos Adicionais:

              Artigos e guias sobre investimentos para PCDs.
              Webinars e workshops com especialistas em finanças e acessibilidade.
              Ferramentas online para simular investimentos e comparar opções.

              Lembre-se:
              <br/>
              A informação aqui fornecida não constitui aconselhamento financeiro.
              Consulte um profissional qualificado antes de tomar qualquer decisão de investimento.

              Nosso compromisso:

              Acessibilidade em primeiro lugar: priorizamos a inclusão em todas as nossas ações.
              Transparência: fornecemos informações claras e honestas sobre os produtos e serviços que indicamos.
              Empoderamento: queremos que você se sinta confiante para tomar o controle do seu futuro financeiro.
              Junte-se a nós e construa um futuro financeiro acessível e próspero!"
      </section>
       
      <div className='lista'>
        <ul class="lista">
        <li>Comunidade de Investidores PCDs: Crescendo Juntos</li>
        <li>Investidor PCD: Informação e Estratégias para o Sucesso</li>
        <li>Rede de Investidores PCDs Compartilhando Conhecimento</li>
        <li >Seu Guia de Investimentos: Conteúdo Exclusivo para PCDs</li>
        <li >Investidor PCD: Informação e Suporte para o seu Futuro Financeiro</li>
      <div/>
      <br/>
        
      </ul>
      
          
        
        
          <h3>Investidor PCD: O Futuro Financeiro que Você Merece, Sem Barreiras.<br/></h3>
          <h4>Conheça agora! os Top 10 Melhores Bancos em Acessibilidade</h4>
    </div>
    <div class="demostrativas">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8Y6XY25_l1SiyAoCC4OQg2eCtVZ4UIfqiA&s" alt="pessoas felizes investindo" />
            
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdaEfOz5UUj94C0TQZRIJbMmhaW2Im5SKJA&s" alt="pessoas felizes investindo" />
    <TabelaBancos></TabelaBancos>
  <Container >
    <div class="row justify-content-between">
    <div class="col-4">
      <section id='bancodonordeste'>
      <CardBanco src="https://cdn.worldvectorlogo.com/logos/banco-do-nordeste.svg"
            titulo="Banco do Nordeste"
            acessibilidade="1º em acessibildade 97 pontos"
            urlBanco="https://www.bnb.gov.br/voce/investimentos"
        />
      </section>
        
    </div>
    <div class="col-4">
    <section id="bancobmg">
      <CardBanco src="https://www.bancobmg.com.br/lumis-theme/br/com/bmg/portal/theme/bmg-portal/img/logo-bmg.svg"
            titulo="Banco BMG"
            acessibilidade="2º em acessibildade 97 pontos"
            urlBanco="https://www.bancobmg.com.br/investimentos/"
          
        />
        </section>
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
    <section id='caixa' >
      <CardBanco src="https://cdn.worldvectorlogo.com/logos/caixa-economica-federal-1.svg"
            titulo="Caixa Econômica Federal"
            acessibilidade="3º em acessibildade 94 pontos"
            urlBanco="https://www.caixa.gov.br/investimentos/Paginas/default.aspx"
        />
        </section>   
    </div>
    <div class="col-4">
    <section id="itau">
          <CardBanco src="https://cdn.worldvectorlogo.com/logos/itau-4.svg"
            titulo="Banco Itaú"
            acessibilidade="4º em acessibildade 94 pontos"
            urlBanco="https://www.itau.com.br/investimentos"
        /> 
        </section>
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
    <section id='mercadopago'>
       <CardBanco src="https://www.dashcontroles.com.br/wp-content/uploads/2023/08/mercado-pago-logo.png"
            titulo="Mercado Pago"
            acessibilidade="5º em acessibildade 93 pontos"
            urlBanco="https://www.mercadopago.com.br/conta"
        />
        </section>
    </div>
    <div class="col-4">
    <section id='bradesco'>
        <CardBanco src="https://banco.bradesco/assets/classic/img/portal-investimento/logo-bradesco-vermelho.png"
            titulo="Bradesco"
            acessibilidade="6º em acessibildade 92 pontos"
            urlBanco="https://banco.bradesco/html/classic/portal-investimentos/index.shtm"
        />
        </section>
    </div>
    <div class="row justify-content-between">
    <div class="col-4">
    <section id='picpay'>
        <CardBanco src="https://cdn.worldvectorlogo.com/logos/picpay-1.svg"
            titulo="PicPay"
            acessibilidade="7º em acessibildade 91 pontos"
            urlBanco="https://picpay.com/investimentos"
        />
        </section>
    </div>
    <div class="col-4">
    <section id="nubank">
        <CardBanco src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2.png"
            titulo="Nubank"
            acessibilidade="8º em acessibildade 84 pontos"
            urlBanco="https://nubank.com.br/nu/investimentos"
        
            
        /> 
        </section>
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
    <section id='bb'>
        <CardBanco src="https://gfi-portal-web.apps.bb.com.br/appms/assets/img/logo-bb.png"
            titulo="Banco do Brasil"
            acessibilidade="9º em acessibildade 82 pontos"
            urlBanco="https://www.bb.com.br/site/investimentos/"
        />
        </section>
    </div>
    <div class="col-4">
    <section id='santander'>
        <CardBanco src="https://cdn.worldvectorlogo.com/logos/santander1.svg"
            titulo="Banco Santander"
            acessibilidade="10º em acessibildade 77 pontos"
            urlBanco="https://www.santander.com.br/banco/investimentos"
        
        />
        </section>
    </div>
  </div>
  </div>
    <div class='CardBancos'>
      
      
        
         
        
        
        
        
        
        
       </div>
      </Container>
      <section id="contatos">
        <h2>Contatos</h2>
        <p>Informações de contato...</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HyAP4BZgKee2k8YF73EAopEpw9-WGJdw0w&s" alt="pessoas felizes investindo" />
      </section>

      
    </div>
  </div>
)
}


